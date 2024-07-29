import { INewPost, INewUser } from '@/types';
import {
  useMutation,
} from '@tanstack/react-query';
import { createUserAccount, signInAccount, signOutAccount, createPost } from '../appwrite/api';

export const useCreateUserAccount= () => {
  return useMutation({
    mutationFn: (user: INewUser) => createUserAccount(user)
  })
}

export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user: {
      email: string;
      password: string;
    }) => signInAccount(user)
  })
}

export const useSignOutAccount = () => {
  return useMutation({
    mutationFn: () => signOutAccount()
  })
}

export const useCreatePost = () => {
  return useMutation({
    mutationFn: (post: INewPost) => createPost(post),
  });
};
