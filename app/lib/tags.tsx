import { Collection, MongoClient, ObjectId } from 'mongodb';

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

export async function connectToCluster(uri: string) {
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
    if(uri !== undefined){
        let mongoClient = await connectToCluster(uri);
        try {
            const db = mongoClient.db('humanity');
            const collection : Collection<Document>= db.collection('tags');
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
}

export async function findTagsByName(collection : Collection<Document>, tag : string) {
    return collection.find({ 'tag': tag }).toArray();
}

export async function findTagsByType(collection : Collection<Document>, tag : string) {
    return collection.find({ 'type': tag }).toArray();
}

export async function findTagsBy2Types(collection : Collection<Document>, tag1 : string, tag2 : string) {
    return collection.find({ '$and' : [{'type': tag1},{'type': tag2}]}).toArray();
}

export async function findTagsByTypeNegTags(collection : Collection<Document>, tag : string) {
    return collection.find({ '$and' : [{'type': tag},{'type': 'neg'}]}).toArray();
}

export async function findTagsByTypeNotNeg(collection : Collection<Document>, tag : string) {
    return collection.find({ '$and' : [{'type' : tag }, {'type' : {'$nin':['neg']}}]}).toArray();
}
