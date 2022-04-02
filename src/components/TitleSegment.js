//Imports
import React from "react";
import {Typography , Select} from "antd";
const { Title } = Typography;
const { Option } = Select;

//Title Segment container
export default function TitleSegment({}){
	//Contains the structure for the top section of the project

	//Returns a JSX component for the title Segment
	return(
		<>
            <Title>SVG from a Decentralized Database Viewer</Title>
        </>
	);
}