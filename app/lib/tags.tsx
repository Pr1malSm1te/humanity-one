import { MongoClient, ObjectId } from 'mongodb';

export interface Tag{
    _id: ObjectId;
    type: string[];
    tag: string;
    desc: string;
    slot: string[];
}

export interface Tags {
    tags: Tag[];
 }

interface Aug{
    _id: ObjectId;
    name: string;
    slot: string;
    tags: string[]
}

export async function connectToCluster(uri) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(uri);
        console.log('Connecting to MongoDB...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB!');

        return mongoClient;
    } catch (error) {
        console.error('Connection to MongoDB failed!', error);
        process.exit();
    }
}

export async function executeTagsCrudOperations(type: number) {
    const uri = process.env.MONGODB_URI;
    let mongoClient;
    try {
        mongoClient = await connectToCluster(uri);
        const db = mongoClient.db('humanity');
        const collection = db.collection('tags');
        switch (type) {
            case 1:
                return await findTagsByTypeNotNeg(collection, 'aug');
                break;
            case 2:
                return await findTagsByTypeNegTags(collection, 'aug');
                break;
            case 3:
                return await findTagsByTypeNotNeg(collection, 'weapon');
                break;
            case 4:
                return await findTagsByTypeNegTags(collection, 'weapon');
                break;
        }
    } finally {
        await mongoClient.close();
    }
}

export async function findTagsByName(collection, tag) {
    return collection.find({ 'tag': tag }).toArray();
}

export async function findTagsByType(collection, tag) {
    return collection.find({ 'type': tag }).toArray();
}

export async function findTagsBy2Types(collection, tag1, tag2) {
    return collection.find({ '$and' : [{'type': tag1},{'type': tag2}]}).toArray();
}

export async function findTagsByTypeNegTags(collection, tag) {
    return collection.find({ '$and' : [{'type': tag},{'type': 'neg'}]}).toArray();
}

export async function findTagsByTypeNotNeg(collection, tag) {
    return collection.find({ '$and' : [{'type' : tag }, {'type' : {'$nin':['neg']}}]}).toArray();
}
