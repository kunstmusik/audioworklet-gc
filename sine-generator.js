class SineGenerator extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [];
  }

  constructor(options) {
    super(options);
    this.sampNum = 0;
  }

  process(inputs, outputs, parameters) {
    let output = outputs[0];
    let amplitude = parameters.amplitude;
    let len = output[0].length;

    let samp = this.sampNum;
    for (let channel = 0; channel < output.length; ++channel) {
      let outputChannel = output[channel];
      for (let i = 0; i < outputChannel.length; ++i) {
        outputChannel[i] = Math.sin(
                ((samp + i) / sampleRate) * 440 * 2 * Math.PI) * 0.25;
      }
    }
    this.sampNum += len;

    return true;
  }
}

registerProcessor('sine-generator', SineGenerator);
