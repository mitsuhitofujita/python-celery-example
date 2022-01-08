import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as PythonCeleryExample from '../lib/python-celery-example-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new PythonCeleryExample.PythonCeleryExampleStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT));
});
