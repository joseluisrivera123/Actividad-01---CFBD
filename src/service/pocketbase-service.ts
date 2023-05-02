import PocketBase from 'pocketbase'

const pb = new PocketBase('http://147.182.228.223');

export const records =  await pb.collection('emergencies').getFullList({
    sort: '-created',
});