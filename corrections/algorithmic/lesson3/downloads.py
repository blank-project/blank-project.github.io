import pathlib
import argparse

import wikipedia
import wptools


def get_summaries_for_category(category_name, n_articles=200, lang='fr'):
    wikipedia.set_lang(lang)
    category = wptools.category('Category:{}'.format(category_name), lang=lang)
    category.get_members()
    if 'subcategories' not in category.data:
        return
    subcategories = [cat['title'] for cat in category.data['subcategories']]
    n_downloaded = 0
    for subcategory_title in subcategories:
        subcategory = wptools.category(subcategory_title, lang=lang)
        subcategory.get_members()
        members = subcategory.data['members']
        for page_info in members:
            try:
                page = wikipedia.page(pageid=page_info['pageid'])
                summary = page.summary
                if summary:
                    yield page.summary
                    n_downloaded += 1
                if n_downloaded == n_articles:
                    wikipedia.set_lang('en')
                    return
            except Exception:
                pass
    wikipedia.set_lang('en')


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('n_articles', type=int, default=2000)
    n_articles = parser.parse_args().n_articles

    data_dir = pathlib.Path('data')
    data_dir.mkdir(exist_ok=True)

    for category in [
            'Histoire', 'Sciences', 'Sport', 'Chimie', 'Informatique']:
        category_file = data_dir / '{}_{}.txt'.format(category, n_articles)
        if not category_file.is_file():
            category_pages = list(
                get_summaries_for_category(category, n_articles=n_articles))
            with open(str(category_file), 'w') as f:
                for summary in category_pages:
                    if summary:
                        f.write(summary.replace('\n', ' '))
                        f.write('\n')
