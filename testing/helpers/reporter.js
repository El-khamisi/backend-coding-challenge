const {
  DisplayProcessor,
  SpecReporter,
  StacktraceOption,
} = require('jasmine-spec-reporter');

class CustomProcessor extends DisplayProcessor {
  displayJasmineStarted(info, log) {
    return `JavaScript ${log}`;
  }
}

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(
  new SpecReporter({
    spec: {
      displayStacktrace: StacktraceOption.NONE,
    },
    customProcessors: [CustomProcessor],
  })
);
