import { useParams } from 'react-router-dom';
import { Content } from 'components/Content';
import { Post } from 'components/Post';

export function PostPage() {
  const { id } = useParams<{id: string}>();

  return (
    <Content>
      <Post id={id}/>
    </Content>
  );
}
