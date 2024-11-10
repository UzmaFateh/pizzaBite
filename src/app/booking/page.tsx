

export default function Contact() {
    return (

        <div className="cont">


            <center>

                <div className="contact" id="contact">
                    <br />
                    <center>
                        <h1 className="pagecont">Book You Table!</h1>
                    </center>
                    <br />
                    <form />
                    <br />
                    <p className="p1">Name:</p>
                    <input type="text" placeholder="enter your name" className="size" />
                    <br /><br />
                    <p className="p1">Email:</p>
                    <input type="email" placeholder="enter your email" className="size" />
                    <br /><br />
                    <p className="p1">Phone:</p>
                    <input type="number" placeholder="enter your number" className="size" />


                    <br /><br />
                    <p className="p1">Have you set a date yet:</p>

                    <input type="date" placeholder="dd/mm/yyyy" className="size" />

                    <br /><br />
                    <p className="p1">Subject:</p>
                    <input type="text" placeholder="Write your requirement" className="size" />
                    <br /><br /><br />
                    <p className="p1">Massage:
                        <br />
                        <textarea name="Comments" cols={20} rows={20} className="size"
                            placeholder="Enter your message here!"></textarea>
                    </p>
                    <br /><br />
                    <button className="read size">Submit</button>
                    <br /><br />

                    <form />
                    <br />
                </div>
            </center>
        </div>








    )
        ;
}