import * as cdk from '@aws-cdk/core';
import { Queue } from '@aws-cdk/aws-sqs';

export class PythonCeleryExampleStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const deadLetterQueue = new Queue(this, 'dead-letter-queue', {
      queueName: 'python-celery-example-dead-letter-queue',
    });

    const queue = new Queue(this, 'queue', {
      queueName: 'python-celery-example-queue',
      deadLetterQueue: {
        maxReceiveCount: 1,
        queue: deadLetterQueue,
      }
    });
  }
}
