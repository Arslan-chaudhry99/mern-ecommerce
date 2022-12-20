try {
           if (authentication !== 0) {
             const transpoter = nodemailer.createTransport({
               service: "gmail",
               auth: {
                 user: process.env.gmail, // generated ethereal user
                 pass: process.env.password, // generated ethereal password
               },
             });
            
           }
           return res.status(200).json({
             success: "not possible",
           });
         } catch (error) {
           return res.status(500).json({
             error: "Error 505.",
           });
         }