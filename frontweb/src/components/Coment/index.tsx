import { AxiosRequestConfig } from 'axios';
import CommentDetails from 'components/ComentDetail';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Review } from 'types/review';
import { BASE_URL, requestBackend } from 'util/requests';
import './styles.css';

type Props = {
  movieId: string;
};

const Comment = ({ movieId }: Props) => {
  const [review, setReview] = useState<Review[]>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: BASE_URL + '/movies/' + movieId + '/reviews',
      withCredentials: true,
    };

    requestBackend(params)
      .then((response) => {
        toast.info('Avaliação cadastrada com sucesso!');
        setReview(response.data);
      })
      .catch(() => {
        toast.error('Erro ao cadastras avaliação!');
      });
  }, [movieId]);

  return (
    <div className="base-card comment-card">
      {review?.map((item) => (
        <div key={item.id}>
          <CommentDetails name={item.user.name} text={item.text} />
        </div>
      ))}
    </div>
  );
};

export default Comment;
