import PocketBase from 'pocketbase';

const pb = new PocketBase('http://147.182.228.223');

export const record = await pb.collection('emergencies').getOne('RECORD_ID', {
    expand: 'relField1,relField2.subRelField',
});