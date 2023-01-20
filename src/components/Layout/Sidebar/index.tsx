import React, { ReactElement } from 'react'
// import Link from 'next/link'
// import { animateScroll as scroll } from "react-scroll";

// import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';

import {
    MediaObject,
    MediaObjectItem,
    MediaObjectThumb,
    MediaObjectBody,
    MediaObjectDate,
    MediaObjectTitle,
    Image,
    SearchBar,
    SearchInput,
    SearchButton,

    WidgetPanel,
    WidgetPanelTitle,

    WidgetPanelListing,
    WidgetPanelLink
} from "../../../styles/common.styles";

function Sidebar(): ReactElement {

    return (
        <>
            <SearchBar>
                <SearchInput placeholder="Search" type="text"
                    name="search"
                // onChange={handleSearch("category")} 
                />
                <SearchButton></SearchButton>
            </SearchBar>
            <WidgetPanel>
                <WidgetPanelTitle>Categories</WidgetPanelTitle>
                <WidgetPanelListing>
                    <WidgetPanelLink>Alphabet Parade</WidgetPanelLink>
                    <WidgetPanelLink>Auditory Processing</WidgetPanelLink>
                    <WidgetPanelLink>Gross Motor</WidgetPanelLink>
                    <WidgetPanelLink>Holiday Themes</WidgetPanelLink>
                    <WidgetPanelLink>Inspire Success</WidgetPanelLink>
                </WidgetPanelListing>
            </WidgetPanel>
            <WidgetPanel>
                <WidgetPanelTitle style={{ backgroundColor: '#ABCD52' }}>Recent Posts</WidgetPanelTitle>
                <WidgetPanelListing>
                    <MediaObject>
                        <MediaObjectItem>
                            <MediaObjectThumb>
                                <Image src="/blog-post01.jpg" alt="" />
                            </MediaObjectThumb>
                            <MediaObjectBody>
                                <MediaObjectDate>25th March, 2021</MediaObjectDate>
                                <MediaObjectTitle>Planting Seeds in the Hearts of Preschoolers</MediaObjectTitle>
                            </MediaObjectBody>
                        </MediaObjectItem>
                        <MediaObjectItem>
                            <MediaObjectThumb>
                                <Image src="/blog-post02.jpg" alt="" />
                            </MediaObjectThumb>
                            <MediaObjectBody>
                                <MediaObjectDate>25th March, 2021</MediaObjectDate>
                                <MediaObjectTitle>Planting Seeds in the Hearts of Preschoolers</MediaObjectTitle>
                            </MediaObjectBody>
                        </MediaObjectItem>
                        <MediaObjectItem>
                            <MediaObjectThumb>
                                <Image src="/blog-post03.jpg" alt="" />
                            </MediaObjectThumb>
                            <MediaObjectBody>
                                <MediaObjectDate>25th March, 2021</MediaObjectDate>
                                <MediaObjectTitle>Planting Seeds in the Hearts of Preschoolers</MediaObjectTitle>
                            </MediaObjectBody>
                        </MediaObjectItem>
                        <MediaObjectItem>
                            <MediaObjectThumb>
                                <Image src="/blog-post04.jpg" alt="" />
                            </MediaObjectThumb>
                            <MediaObjectBody>
                                <MediaObjectDate>25th March, 2021</MediaObjectDate>
                                <MediaObjectTitle>Planting Seeds in the Hearts of Preschoolers</MediaObjectTitle>
                            </MediaObjectBody>
                        </MediaObjectItem>
                    </MediaObject>
                </WidgetPanelListing>
            </WidgetPanel>
        </>
    );
}

export default Sidebar
