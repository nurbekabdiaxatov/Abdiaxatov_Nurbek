// lib/firestore.ts
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from './firebase';

const postsCollectionRef = collection(db, 'posts');

// Blog postini saqlash
export const createPost = async (title: string, content: string) => {
    try {
        await addDoc(postsCollectionRef, {
            title,
            content,
            timestamp: new Date(),
        });
    } catch (error) {
        console.error('Error adding document: ', error);
    }
};

// Blog postlarini olish
export const getPosts = async () => {
    const querySnapshot = await getDocs(postsCollectionRef);
    const posts = querySnapshot.docs.map((doc) => doc.data());
    return posts;
};
