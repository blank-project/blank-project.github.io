import argparse
import json
import pandas as pd
import seaborn as sns
from matplotlib import pyplot as plt

parser = argparse.ArgumentParser()
parser.add_argument('in_file')
parser.add_argument('out_file')
args = parser.parse_args()

with open(args.in_file, 'rb') as f:
    times = json.loads(f.read().decode('utf-8'))

times = pd.DataFrame.from_dict(times)
times = times.stack().reset_index()
times.rename(columns={'level_1': 'n_elements', 0: 'time (ms)'}, inplace=True)
fig, ax = plt.subplots()
sns.pointplot(data=times, x='n_elements', y='time (ms)')
ax.set_yscale('log')
sns.despine(fig)

fig.savefig(args.out_file)
