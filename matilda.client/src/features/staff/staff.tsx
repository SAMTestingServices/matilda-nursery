import {Grid, Typography} from "@mui/material";
import {useAppSelector} from "../../hooks/store-hooks.ts";
import BasicCard from "../shared/card.tsx";


const AboutUs = ()  => {

    const staffData = useAppSelector((state) => state.staff.staffData); // Assuming 'tabs' is the key used in the store

    const staff = (
        <>
                {staffData.map((staff) => {

                    const cardHtml = (
                      <>
                              <Typography variant="h5" component="div">
                                  {staff.name}
                              </Typography>
                          <img src={staff.picture}></img>
                          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                              {staff.position}
                          </Typography>
                          </>
                    );

                    return (
                        <Grid item xs={12} sm={6} md={4} lg={4} key={staff.id}>
                            <BasicCard content={cardHtml} action={null} />
                        </Grid>
                    );
                })}

            </>
    );

    return (
        <>
            <Grid container spacing={2} style={{ width: '100%', margin: 0 }}> {/* Remove margin added by default */}
            {staff}
            </Grid>
        </>
    );
}

export default AboutUs;