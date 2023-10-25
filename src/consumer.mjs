import { Kafka } from "kafkajs";

const CLIENT_ID = "client-1";
const GROUP_ID = "group-1";
const TOPIC_NAME = "topic-1";
const BROKERS = ["localhost:29092"];

const kafka = new Kafka({
  clientId: CLIENT_ID,
  brokers: BROKERS,
});

const consumer = kafka.consumer({ groupId: GROUP_ID });

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: TOPIC_NAME, fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        topic,
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });
};

run().catch(console.error);
