import React, {useState} from 'react'



export const Register = () => {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = async (e) => { 
        console.log(name, email, password)
        e.preventDefault();
  
        const res = await fetch(`http://localhost:5200/users/`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username:name,
                email:email,
                password:password
            })
        })
        const data = await res.json()
        console.log(data)
    };

    return (
        <div className="container p-2">
        <div className="col-md-4">
          <form onSubmit={handleSubmit} className="card card-body">
            <div className="form-group">
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="form-control p-2 mb-3"
                placeholder="Name"
                autoFocus
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="form-control mb-3"
                placeholder="User's Email"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="form-control mb-3"
                placeholder="User's Password"
              />
            </div>
            <button className="btn btn-primary btn-block">
              Register
            </button>
          </form>
        </div>
             
            <div className="col md-8">
            
            </div>
        </div>
    )
};
