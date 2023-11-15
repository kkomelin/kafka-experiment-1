import { Kafka } from "kafkajs";

const CLIENT_ID = "client-1";
const TOPIC_NAME = "topic-1";
const BROKERS = ["localhost:29092"];

const kafka = new Kafka({
  clientId: CLIENT_ID,
  brokers: BROKERS,
});

const producer = kafka.producer({
    allowAutoTopicCreation: false
});

const run = async () => {
  await producer.connect();

  for (let i = 1; i <= 10; i++) {
    await producer.send({
      topic: TOPIC_NAME,
      messages: [{ value: "Message " + i }],
    });
  }

  await producer.disconnect();
};

run().catch(console.error);
