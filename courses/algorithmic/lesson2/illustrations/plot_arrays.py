import pathlib
from matplotlib import pyplot as plt
from matplotlib import patches

box_w = .11
box_h = .1
x_offset = .3
y_offset = .5
a_x, a_y = x_offset / 2, y_offset / 2


def add_boxes(ax, box_labels):
    for i in list(range(3)) + [4, 5]:
        p = patches.Rectangle(
            (x_offset + box_w * i, y_offset), box_w, box_h, fill=False)
        ax.add_patch(p)
        if i < 3:
            ax.text(x_offset + box_w * (i + .2), y_offset + box_h * .5,
                    box_labels[i])

    ax.text(
        x_offset + box_w * (3.1), y_offset + .5 * box_h, '...', fontsize=40)
    ax.text(x_offset + box_w * (4.1), y_offset + .5 * box_h, box_labels[-2])
    ax.text(x_offset + box_w * (5.1), y_offset + .5 * box_h, box_labels[-1])


def add_pointing_box(ax, a_x, a_y, arrow_x, arrow_y, label):
    a_tr_x, a_tr_y = a_x + box_w, a_y + box_h
    p = patches.Rectangle(
        (a_x, a_y), box_w, box_h, fill=False)
    ax.add_patch(p)
    ax.arrow(a_tr_x, a_tr_y, arrow_x - a_tr_x - .005, arrow_y - a_tr_y - .01,
             color='black')
    ax.text(a_x + box_w * (.1), a_y + .5 * box_h, label)


fig, ax = plt.subplots(figsize=(8, 3))
ax.set_ylim(.2, .7)
ax.axis('off')
box_labels = ['a[1]', 'a[2]', 'a[3]', 'a[n-1]', 'a[n]']
add_boxes(ax, box_labels)
add_pointing_box(ax, a_x, a_y, x_offset, y_offset, 'a')

fig.savefig(str(pathlib.Path('figures') / 'array_symbols.png'))


fig, ax = plt.subplots(figsize=(8, 3))
ax.axis('off')
ax.set_ylim(.2, .7)
box_labels = ["'b'", "'e'", "'l'", "'l'", "'e'"]
add_boxes(ax, box_labels)
add_pointing_box(ax, a_x, a_y, x_offset, y_offset, 'a')

fig.savefig(str(pathlib.Path('figures') / 'array_values.png'))
