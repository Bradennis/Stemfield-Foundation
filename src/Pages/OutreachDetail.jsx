import { useParams } from "react-router-dom";
import { outreachActivities } from "../data/outreachData";
import "./OutreachDetail.css";

const OutreachDetail = () => {
  const { slug } = useParams();
  const activity = outreachActivities.find((item) => item.slug === slug);

  if (!activity)
    return <div className='outreach-detail'>Activity not found.</div>;

  return (
    <div className='outreach-detail'>
      <div className='container'>
        <h2>{activity.title}</h2>
        <img src={activity.image} alt={activity.title} className='main-image' />
        <p>{activity.content}</p>
      </div>
    </div>
  );
};

export default OutreachDetail;
