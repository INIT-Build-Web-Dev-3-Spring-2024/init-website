import React, { useEffect, useState } from "react";
import CompanyCard, { getWasViewJobsClicked } from "./CompanyCard";
import {
  type GetServerSideProps,
  type InferGetServerSidePropsType,
} from "next";
import JobModal from "./JobModal";
import { getWasApplyFilterClicked } from "./FilterJobsCard";
import FilterJobsCard from "./FilterJobsCard";
import type { FilterInput } from "./FilterJobsCard";
import JobCard from "./JobCard";
