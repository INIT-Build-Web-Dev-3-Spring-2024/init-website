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
import { getSession } from 'next-auth/react';
import superjson from 'superjson';
import { db } from '~/server/db';

// Define a type fore the selected filters
export type SelectedFilters = {
	jobType: string[];
	jobPosition: string[];
	jobLocation: string[];
};

let companyDataArr: CompanyCardType[] | undefined = [];

// GetServerSideProps implementation
export const getServerSideProps: GetServerSideProps = async (context) => {
	// Get the authentication context
	const session = await getSession(context.req);

	// Creeate the context for server-side helpers
	const trpcContext = {
		auth, // Auth context
		db, // Database connection
	};

	const helpers createServerSideHelpers({
		router: appRouter,
		ctx: trpcContext,
		transformer: superjson,
	});

	await helpers.jobs.getAll.prefetch();
};
