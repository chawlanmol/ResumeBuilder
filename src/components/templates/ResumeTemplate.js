import React from "react";
import styled from "styled-components";

import Separator from "../atoms/Separator";
import ShortDescription from "../molecules/ShortDescription";
import ListDescription from "../molecules/ListDescription";
import NonRatedDescription from "../organisms/NonRatedDescription";
import Education from "../organisms/Education";
import Introduction from "../organisms/Introduction";
import Experience from "../organisms/Experience";

import { MdWork } from "react-icons/md";
import { MdVpnKey } from "react-icons/md";
import { MdVerifiedUser } from "react-icons/md";

import { MdPermIdentity } from "react-icons/md";
import { BsBook } from "react-icons/bs";
import { GrStatusGood } from "react-icons/gr";
import { IoGitBranch } from "react-icons/io5";
import { MdBuild } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";

const GridContainer = styled.div`
  padding: 50px;
  width: 1140px;
  margin: auto;
  background-color: #f2f1f0;
  display: grid;
  grid-template-columns: 66% 1fr 33%;
`;

const Divider = styled.div`
  height: 100%;
  max-width: 2px;
  background-color: #000000;
`;

const GridColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${(props) => props.styles}
`;

export default function ResumeTemplate({ data }) {
  return (
    <GridContainer>
      <GridColumn>
        <Introduction name={data.name} role={data.role} personalDetails={data.personal_details} />
        <Experience title={data.companyDetails.title} Icon={MdWork} companyList={data.companyDetails.companyList} />
        <Separator />
        <ListDescription title={data.key_projects.title} Icon={MdVpnKey} description={data.key_projects.description} />
        <Separator />
      </GridColumn>
      <Divider />

      <GridColumn styles={{ "margin-left": "10px" }}>
        <ShortDescription title={data.summary.title} Icon={MdPermIdentity} description={data.summary.description} />
        {/* <Separator />
        <ShortDescription title={data.career.title} Icon={AiOutlineAim} description={data.career.description} /> */}
        <Separator />
        <NonRatedDescription title={data.skillset.title} Icon={BsBook} description={data.skillset.description} />
        <Separator />
        <NonRatedDescription title={data.methodology.title} Icon={IoGitBranch} description={data.methodology.description} />
        <Separator />
        <NonRatedDescription title={data.tools.title} Icon={MdBuild} description={data.tools.description} />
        <Separator />
        <Education title={data.education.title} Icon={FaUniversity} description={data.education.description} />
      </GridColumn>
    </GridContainer>
  );
}
