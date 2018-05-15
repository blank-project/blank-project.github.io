import pathlib
import numpy as np
from matplotlib import pyplot as plt
from scipy.io import wavfile
import scipy.signal

rate, data = wavfile.read(str(pathlib.Path('data') / 'music.wav'))
print(data.shape)

signal = data[:, 0]
signal = scipy.signal.decimate(signal, 8)
signal = scipy.signal.decimate(signal, 8)
signal = scipy.signal.decimate(signal, 4)

print('values: {}'.format(np.round(signal, 2)))

fig, ax = plt.subplots(figsize=(10, 3))

indices = np.arange(len(signal)) * 8 * 8 * 4
ax.plot(indices, signal)
ax.set_xlim(0, indices[-1])
ax.set_title('Audio signal')

plots_dir = pathlib.Path('figures')
plots_dir.mkdir(exist_ok=True)
fig.savefig(str(plots_dir / 'audio_signal.png'))
