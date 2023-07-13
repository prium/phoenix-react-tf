import PostsCard from 'components/cards/PostsCard';
import { PostsData } from 'data/social/postsData';

const SocialPosts = ({ data }: { data: PostsData[] }) => {
  return (
    <>
      {data.map((post, index) => (
        <PostsCard key={index} post={post} />
      ))}
    </>
  );
};

export default SocialPosts;
