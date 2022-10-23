interface User {
    img: string;
    name: string; 
    location: string; 
    score: string
}


export default function User(payload: any) {
    return (
          <div>
              <>
            {
                payload.map((value: User, index: number) => (
                    <div className="flex" key={index}>
                        <div className="item">
                            <img src={value.img} alt="" />
            
                            <div className="info">
                                <h3 className='name text-dark'>{value.name}</h3>    
                                <span>{value.location}</span>
                            </div>                
                        </div>
                        <div className="item">
                            <span>{value.score}</span>
                        </div>
                    </div>
                    )
                )
            }
        </>
          </div>
    )
  }