import React from "react";
import { AppBar, Toolbar, Typography, Theme, Button, Tabs, Tab, Drawer } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Logo from "@jorsek/gatsby-theme-easydita-core/src/components/Logo";
import { SearchBox } from "@jorsek/static-portal-components";
import { useGroup } from "@jorsek/gatsby-theme-easydita-core/src/utils/hooks";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import Footer from "@jorsek/gatsby-theme-easydita-jsk/src/components/Footer";
import { Helmet } from "react-helmet";

const withStyles = makeStyles((theme: Theme) => ({
    content: {
        "display": "flex",
        "flexDirection": "column",
        "height": "100%",
        "minHeight": "100vh",
        "paddingTop": theme.spacing(7),
        "backgroundColor": theme.palette.background.default,
        [theme.breakpoints.down("sm")]: {
            paddingTop: theme.spacing(5),
        },
        "@global": {
            "*": {
                fontFamily: "Roboto, sans-serif",
            },
        },
    },
    header: {
        "backgroundColor": theme.palette.background.paper,
        "& .MuiButtonBase-root": {
            textTransform: "none",
        },
    },

    top_nav_wrapper: {
        backgroundColor: theme.palette.grey[100],
        height: "auto",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    top_nav: {
        "paddingLeft": theme.spacing(2),
        "paddingRight": theme.spacing(2),
        "display": "flex",
        "alignItems": "center",
        "margin": "0 auto",
        "width": "100%",
        "& > a": {
            marginRight: theme.spacing(8),
        },
    },
    tabRoot: {
        minWidth: "inherit",
    },
    tabsRoot: {
        "& span": {
            height: theme.spacing(0.5),
        },
        "& .Mui-selected > span": {
            fontWeight: "bold",
        },
        "& .MuiTabs-flexContainer": {
            height: theme.spacing(8),
        },
        [theme.breakpoints.down("md")]: {
            maxWidth: theme.spacing(52.5),
        },
    },
    tabsRootMobile: {
        "& span": {
            display: "none",
        },
    },
    support_buttons: {
        "& > :not(:first-child)": {
            marginLeft: theme.spacing(2),
        },
        "& Button": {
            backgroundColor: theme.palette.grey[50],
        },
        "& .MuiButtonBase-root": {
            textTransform: "uppercase",
            backgroundColor: theme.palette.background.default,
        },
        "display": "flex",
        "flexWrap": "nowrap",
    },
    support_buttons_small: {
        "display": "flex",
        "flexDirection": "column",
        "& .MuiButtonBase-root": {
            backgroundColor: theme.palette.background.default,
            marginBottom: theme.spacing(1.25),
            marginTop: theme.spacing(1.25),
            width: "80%",
            alignSelf: "center",
        },
    },
    toolbar: {
        alignSelf: "center",
        width: "100%",
        paddingRight: theme.spacing(2),
        display: "flex",
        justifyContent: "space-between",
        [theme.breakpoints.down("sm")]: {
            "paddingRight": theme.spacing(7),
            "& > a": {
                width: "100%",
            },
            "& .gatsby-image-wrapper": {
                display: "flex !important",
                margin: "auto",
            },
        },
    },
    drawerPaper: {
        width: "40%",
    },
    drawer_icon: {
        marginRight: theme.spacing(2),
        color: theme.palette.grey[300],
        border: `1px solid ${theme.palette.grey[300]}`,
    },
    drawer_contents: {
        "marginTop": theme.spacing(2),
        "& .MuiTabs-flexContainer": {
            flexDirection: "column",
        },
        "& .MuiTab-wrapper": {
            textTransform: "capitalize",
            textAlign: "left",
            display: "block",
        },
    },
    searchBoxMobileWrapper: {
        //TODO - need  to refactor SearchBox to allow for input classes
        "& > div > div": {
            margin: "auto",
        },
    },
}));

const Layout: React.FunctionComponent = (props) => {
    const sections = useGroup("main")?.children;
    const loc = useLocation();
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const current_path = loc.pathname.replace("/content/", "").split("/")[0];
    const theme: Theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
    const [mobileSearchBarOpen, setMobileSearchBarOpen] = React.useState(false);

    const toggleMobileSearchBar = () => (_event) => {
        setMobileSearchBarOpen(!mobileSearchBarOpen);
    };

    const classes = withStyles(props);
    return (
        <div className={classes.content}>
            <Helmet>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                />
                <link
                    href={"https://fonts.googleapis.com/css?family=Lato:400,700|Open+Sans:400,600&display=swap"}
                    rel="stylesheet"
                ></link>
                <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Helmet>
            <AppBar color="inherit" position="fixed" className={classes.header}>
                <Toolbar className={classes.toolbar}>
                    {isSmall ? (
                        <>
                            <MenuIcon
                                className={classes.drawer_icon}
                                color="action"
                                onClick={() => setDrawerOpen(true)}
                            />
                            <Logo />
                            {mobileSearchBarOpen === true ? (
                                <>
                                    <CloseIcon onClick={toggleMobileSearchBar()}></CloseIcon>
                                </>
                            ) : (
                                <SearchIcon onClick={toggleMobileSearchBar()} />
                            )}
                        </>
                    ) : (
                        <>
                            <div className={classes.top_nav}>
                                <Logo />
                                <div style={{ flex: "8 1 auto" }}>
                                    <Tabs
                                        variant="scrollable"
                                        value={current_path}
                                        indicatorColor={"primary"}
                                        classes={{ root: classes.tabsRoot }}
                                    >
                                        {(sections || []).map((section) => (
                                            <Tab
                                                key={section.href}
                                                value={section.href}
                                                label={section.title}
                                                classes={{ root: classes.tabRoot }}
                                                onClick={(evt) => {
                                                    evt.preventDefault();
                                                    navigate(`/content/${section.href}`);
                                                }}
                                            />
                                        ))}
                                    </Tabs>
                                </div>
                                <div style={{ flexGrow: 1 }} />
                            </div>
                        </>
                    )}
                </Toolbar>
                {isSmall ? (
                    <Drawer
                        open={drawerOpen}
                        onClose={() => setDrawerOpen(false)}
                        classes={{ paper: classes.drawerPaper }}
                    >
                        <div className={classes.drawer_contents}>
                            <div>
                                <Tabs
                                    value={current_path}
                                    indicatorColor={"primary"}
                                    classes={{ root: classes.tabsRootMobile }}
                                >
                                    {(sections || []).map((section) => (
                                        <Tab
                                            key={section.href}
                                            value={section.href.split("/")[0]}
                                            label={section.title}
                                            classes={{ root: classes.tabRoot }}
                                            onClick={(evt) => {
                                                evt.preventDefault();
                                                navigate(`/content/${section.href}`);
                                                setDrawerOpen(false);
                                            }}
                                        />
                                    ))}
                                </Tabs>
                            </div>
                            <div style={{ flexGrow: 1 }} />
                        </div>
                    </Drawer>
                ) : null}

                {mobileSearchBarOpen === true && (
                    <div className={classes.searchBoxMobileWrapper}>
                        <SearchBox />
                    </div>
                )}
                <div data-netlify-identity-button>Login with Netlify Identity</div>
            </AppBar>
            {props.children}
            <div style={{ flexGrow: 1 }} />
            <Footer />
        </div>
    );
};

export default Layout;
