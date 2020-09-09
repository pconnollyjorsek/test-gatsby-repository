import React from "react";
import { Theme, makeStyles, Typography } from "@material-ui/core";
import { SocialSharing } from "@jorsek/static-portal-components";
import RSSIcon from "@material-ui/icons/RssFeed";
import blueGrey from "@material-ui/core/colors/blueGrey";
import { FacebookIcon, TwitterIcon } from "react-share";

const withStyles = makeStyles((theme: Theme) => {
    return {
        footer_1_wrapper: {
            backgroundColor: blueGrey[900],
        },
        footer_1: {
            "color": theme.palette.grey[50],
            "padding": theme.spacing(8),
            "paddingLeft": 0,
            "width": "100%",
            "display": "flex",
            "margin": "0 auto",
            "maxWidth": theme.spacing(180),
            "& > div:first-of-type": {
                marginLeft: theme.spacing(2),
            },
            [theme.breakpoints.down("sm")]: {
                "flexDirection": "column-reverse",
                "paddingTop": theme.spacing(3),
                "paddingBottom": theme.spacing(3),
                "& > div:first-of-type": {
                    marginLeft: theme.spacing(3),
                    marginBottom: theme.spacing(2),
                },
                "& > div": {
                    marginLeft: theme.spacing(3),
                    marginBottom: theme.spacing(5),
                },
            },
        },
        footer_2_wrapper: {
            backgroundColor: blueGrey[600],
        },
        footer_2: {
            "display": "flex",
            "justifyContent": "space-between",
            "color": theme.palette.grey[50],
            "padding": theme.spacing(3),
            "paddingLeft": 0,
            "maxWidth": theme.spacing(180),
            "margin": "0 auto",
            "width": "100%",
            "& > div:first-of-type": {
                marginLeft: theme.spacing(2),
            },
            [theme.breakpoints.down("sm")]: {
                "flexDirection": "column-reverse",
                "paddingLeft": theme.spacing(3),
                "& > div:first-of-type": {
                    margin: "0 auto",
                    marginTop: theme.spacing(1),
                },
                "& div:nth-of-type(2)": {
                    display: "flex",
                    justifyContent: "space-evenly",
                    width: "70%",
                },
            },
        },
        footer_item: {
            "marginLeft": theme.spacing(10),
            "& a": {
                "textDecoration": "none",
                "color": theme.palette.grey[300],
                "&:hover": {
                    color: theme.palette.grey[50],
                },
            },
            [theme.breakpoints.down("sm")]: {
                "margin": "0 auto",
                "& a": {
                    // marginRight: theme.spacing(3)
                },
                "& svg": {
                    height: theme.spacing(5),
                    width: theme.spacing(5),
                },
            },
        },
        footerCopyrightText: {
            [theme.breakpoints.down("sm")]: {
                fontSize: "0.6rem",
            },
        },
    };
});

const Footer = (props: any) => {
    const classes = withStyles(props);
    const getCurrentYear = () => new Date().getFullYear();

    return (
        <>
            <div className={classes.footer_1_wrapper}>
                <div className={classes.footer_1}>
                    <div className={classes.footer_item}>
                        <Typography color="inherit" variant="h5">
                            Jorsek, Inc.
                        </Typography>
                        320 Goodman St. N.
                        <br />
                        Suite 104
                        <br />
                        Rochester, NY 14607 USA
                        <br />
                        Toll Free: 1-877-492-2960
                    </div>
                    <div className={classes.footer_item}>
                        <Typography color="inherit" variant="h5">
                            Additional Resources
                        </Typography>
                        <a href="https://easydita.com">easydita.com</a>
                        <br />
                        <a href="https://easydita.com/about"> About</a>
                        <br />
                        <a href="https://easydita.com/resources"> Resources</a>

                        <br />
                        <a href="https://support.easydita.com"> Support</a>
                    </div>
                </div>
            </div>
            <div className={classes.footer_2_wrapper}>
                <div className={classes.footer_2}>
                    <div className={classes.footer_item}>
                        <Typography className={classes.footerCopyrightText}>
                            {`Copyright © 2004-${getCurrentYear()} Jorsek LLC. | `}
                            <a href="https://easydita.com/legal/"> Legal</a>
                        </Typography>
                    </div>
                    <div className={classes.footer_item}>
                        <a href="https://www.facebook.com/easyDITA" target="blank">
                            <FacebookIcon size={32} round={true} />
                        </a>
                        <a href="https://twitter.com/easyDITA" target="blank">
                            <TwitterIcon size={32} round={true} />
                        </a>
                        <a href="https://easydita.staging.wpengine.com/feed/" target="blank">
                            <RSSIcon style={{ color: "#09afd6" }} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
