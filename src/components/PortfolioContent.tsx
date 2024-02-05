import React, { useEffect, useState } from 'react'
import { TitleIcon} from '../assets/icons/icons';
import axios from 'axios';

type DataType = {
    [key: string]: number | string | DataType[] | null;
    id: number; 
    name: string;
    image_url: string;
}
  
function PortfolioContent() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<DataType[] | null>(null);

    // useEffect(() => {
    //     console.log(data, 'data');
    // }, [data]);

    // 데이터 로딩 함수
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('../data.json');
      setData(response.data);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...!</div>  // 로딩 중일 때 로딩 화면 노출
  }

  if (!data) {
    return null;  // 데이터가 없을 때
  }
    

  return (
    <div className='content portfolio'>
        {
            data?.map((item:DataType)=>
                <section className='dot-bg portfolio-section' key={item.id}>
                    <div className='dot-bg-inner'>
                        <div className="content-bg-title">
                            <TitleIcon />
                            <p>{item.name}</p>
                        </div>
                        <div className={`content-bg-text pf-content-bg ${item.keyword}`}>
                            <img src={item.image_url} alt="썸네일이미지"></img>
                        </div>
                    </div>
                </section>
            )
        }
    </div>
  )
}

export default PortfolioContent