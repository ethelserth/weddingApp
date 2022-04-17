import  React, {useState} from 'react';

const RSVP = ({status, message, onValidated}) => {
    
    const [checked, setChecked] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    
    let email, name, attendance;

    const submit = () =>
        email &&
        name &&
        email.value.indexOf("@") > -1 &&
        onValidated({
        EMAIL: email.value,
        FNAME: name.value,
        ATTENDANCE : checked == 1 ? 'Yes!' : 'No',
    });

    const handleChange = () => {
        setChecked(!checked);
        setChecked2(false);
    };

    const handleChange2 = () => {
        setChecked(false);
        setChecked2(!checked2);
    };

    return (
        <section className="bg-slate-50">
            <div className="w-11/12 lg:w-5/12 mx-auto">
                <div className="flex items-center justify-center">
                    <div className="container mx-auto w-full h-full">
                        <div className="title pb-5">
                            <h2 className="font-thin text-center text-5xl text-gray-600 pb-10 pt-10">Will you be there?</h2>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full">
                            {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                            {status === "error" && (
                                <div
                                style={{ color: "red" }}
                                dangerouslySetInnerHTML={{ __html: message }}
                                />
                            )}
                            {status === "success" && (
                                <div
                                style={{ color: "green" }}
                                dangerouslySetInnerHTML={{ __html: message }}
                                />
                            )}
                        </div>
                        <div className="flex lg:flex-row flex-col items-center justify-center w-full">                        
                            <div className='flex flex-col w-full'>
                                <div className='flex-col flex mb-4'>
                                    <label htmlFor="FNAME" className="">Your Name</label>
                                    <input
                                        ref={node => (name = node)}
                                        type="text"
                                        placeholder="Your name"
                                        id="mce-FNAME"
                                        name="FNAME"
                                        className='bg-slate-200	py-2 px-2 rounded mb-1 mt-1'
                                    />
                                </div>
                                <div className='flex-col flex mb-4'>
                                    <label htmlFor="FNAME" className="">Your Email</label>
                                    <input
                                        ref={node => (email = node)}
                                        type="email"
                                        placeholder="Your email"
                                        id="mce-EMAIL"
                                        className='bg-slate-200	py-2 px-2 rounded mb-1 mt-1'
                                    />
                                </div>
                                <div className='flex-row flex'>
                                    <input
                                        type="radio"
                                        checked={checked}
                                        onChange={handleChange}
                                        id="mce-ATTENDANCE-1"
                                        className='mt-2 mr-4'
                                    />
                                    <label htmlFor="FNAME">Will you attend?</label>
                                </div>
                                <div className='flex-row flex'>
                                    <input
                                        type="radio"
                                        checked={checked2}
                                        onChange={handleChange2}
                                        id="mce-ATTENDANCE-1"
                                        className='mt-2 mr-4'
                                    />
                                    <label htmlFor="FNAME">Will you miss out?</label>
                                </div>
                                <div className='flex-col flex'>
                                    <button style={{ fontSize: "2em", padding: 5 }} onClick={submit}>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RSVP;