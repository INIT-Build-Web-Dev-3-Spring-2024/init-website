"use client"

import React from "react";
import { useState, useRef } from "react";
import { setWasSearchBtnClicked } from "./SearchInput";

interface CheckboxState {
	fulltime: boolean;
	partTime: boolean;
	internship: boolean;
	newGrad: boolean;
	onSite: boolean;
	hybrid: boolean;
	remote: boolean;
}

export type FilterInput = {
	jobType: string[];
	jobPosition: string[];
	jobLocation: string[];
};

type FilterJobsCardProps = {
	onFilterChange: (filterInput: FilterInput) => void;
	onResetFilters: () => void;
};

let wasApplyFilterClicked = false;

export function setWasApplyFilterClicked(value: boolean) {
	wasApplyFilterClicked = value;
}

export function getWasApplyFilterClicked() {
	return wasApplyFilterClicked;
}

export default function FilterCard({ onFilterChange, onResetFilters }: FilterJobsCardProps) {
	const fullTimeCheckBox = useRef(null)

	const [CheckboxState, setCheckboxState] = useState({
		fulltime: false,
		partTime: false,
		internship: false,
		newGrad: false,
		onSite: false,
		hybrid: false,
		remote: false
	});

	const [jobTypeArr, setJobTypeArr] = useState<string[]>([]);
	const [jobPosTypeArr, setJobPosTypeArr] = useState<string[]>([]);
	const [jobLocArr, setJobLocArr] = useState<string[]>([]);

	return (
		<>
			<input type="checkbox"></input>


		</>
	)
	
	

	function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>): void {
		const { name, checked } = e.target;
		setCheckboxState({ ...CheckboxState, [name]: checked });

		
	}
}
