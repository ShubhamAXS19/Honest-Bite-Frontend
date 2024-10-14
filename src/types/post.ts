export interface IPost {
  img: string[]; // Array of image URLs
  caption?: string; // Optional caption for the post
  name?: string; // Optional name for the post
  location: number[]; // Location as [latitude, longitude]
  likes: number; // Number of likes on the post
  comments: string[]; // Array of comments on the post
  shares: number; // Number of shares
  bookmarked: boolean; // Whether the post is bookmarked
  Dietary?: string; // Optional dietary info
  Cuisine?: string; // Optional cuisine info
  mealType?: string; // Optional meal type
  tags: string[]; // Array of tags
  createdAt: Date; // Creation date of the post
  Author?: string; // Optional reference to the author's ID
  _id: string; // Post ID
}

export interface ScrollableCardRowProps {
  allPosts: IPost[]; // Array of posts to be rendered
}

export interface UserPostCardProps {
  showEditButton: boolean;
  postsData: IPost;
}

export interface PostData {
  postData: IPost;
}
