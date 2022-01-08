from celery import Celery

app = Celery("python-celery-example")
app.config_from_object('celeryconfig')

@app.task(queue="python-celery-example-queue", bind=True, retry=True)
def hello(self):
    return "hello world"
