from kombu.utils.url import safequote

aws_access_key = safequote("...")
aws_secret_key = safequote("...")

broker_url = "sqs://{aws_access_key}:{aws_secret_key}@".format(
    aws_access_key=aws_access_key, aws_secret_key=aws_secret_key,
)
broker_transport_options = {
    'region': 'ap-northeast-1',
    'queue_name_prefix': '',
}
