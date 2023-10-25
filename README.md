# kafka-experiment-1

Simple Kafka producer and consumer to test Kafka setup.

## Installation

```shell_script
npm install
```

## Usage

1. Run the Kafka cluster:

```shell_script
docker compose up -d
```

2. Run the consumer and keep it run:

```shell_script
node src/consumer.mjs
```

3. Run the producer as many times as you need:

```shell_script
node src/producer.mjs
```
