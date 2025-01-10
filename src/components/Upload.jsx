import './Upload.css'

export default function Upload() {
    return (
        <>
            <div className="signin-ctn">
                <h4 style={{ textAlign: "left", color: '#256fa1ff' }}>Enter your personal details below:</h4>
                <div className="credentials-ctn">
                    <p className="credentials">First Name: </p>
                    <input type="text"></input>
                </div>
                <div className="credentials-ctn">
                    <p className="credentials">Last Name: </p>
                    <input type="text"></input>
                </div>
                <div className="credentials-ctn">
                    <p className="credentials">Nationality: </p>
                    <input type="text"></input>
                </div>
                <div className="credentials-ctn">
                    <p className="credentials">Enter NRIC: </p>
                    <input type="text"></input>
                </div>
                <div className="credentials-ctn">
                    <p className="credentials">Upload NRIC/Birth Certificate: </p>
                    <button className="upload-btn">Upload</button>
                </div>
                <button className="upload-btn" onClick={() => alert("Submitted successfully!")}>Submit</button>
            </div>
        </>
    );
}