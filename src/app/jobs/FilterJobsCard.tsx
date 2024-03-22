"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type FilterCategories = "jobType" | "positionType" | "jobLocation";

export default function FilterCard() {
	const router = useRouter();
	const [filters, setFilters] = useState<Record<FilterCategories, Set<string>>>(
		{
		jobType: new Set(),
		positionType: new Set(),
		jobLocation: new Set(),
		}
	);

	function handleFilter(category: FilterCategories, filter: string) {
		// see which filters the user has applied
		const newJobTypeFilters = new Set(filters.jobType);
		const newPositionTypeFilters = new Set(filters.positionType);
		const newJobLocationFilters = new Set(filters.jobLocation);

		if(category === 'jobType'){
			newJobTypeFilters.has(filter) ? newJobTypeFilters.delete(filter) : newJobTypeFilters.add(filter);
		}else if(category === 'positionType'){
			newPositionTypeFilters.has(filter) ? newPositionTypeFilters.delete(filter) : newPositionTypeFilters.add(filter);
		}else if(category === 'jobLocation'){
			newJobLocationFilters.has(filter) ? newJobLocationFilters.delete(filter) : newJobLocationFilters.add(filter);
		};

		setFilters({
			jobType: newJobTypeFilters,
			positionType: newPositionTypeFilters,
			jobLocation: newJobLocationFilters
		});
	}

	function applyFilters(router: AppRouterInstance){
		let filterParams = ""

		if(filters.jobType.size > 0){
			filterParams += (`?jobType=${encodeURI(Array.from(filters.jobType).join(','))}`);
		}

		if(filters.positionType.size > 0){
			filterParams += (filterParams.length > 0 ? "&" : "?") +
				`positionType=${encodeURI(Array.from(filters.positionType).join(','))}`;
		}

		if(filters.jobLocation.size > 0){
			filterParams += (filterParams.length > 0 ? "&" : "?") +
				`jobLocation=${encodeURI(Array.from(filters.jobLocation).join(','))}`;
		}

		if(filterParams.length > 0) {
			router.push(filterParams);
		}
	}

	function clearFilters(){
		setFilters({
			jobType: new Set(),
			positionType: new Set(),
			jobLocation: new Set(),
		});

		router.replace("jobs")
	}

	return (
		<div className="h-[485px] w-48 rounded-md border-2 border-[#121415] bg-[#121415] p-6">
		  <div className="flex items-baseline justify-between">
			<h2 className="mb-4 text-xl">Filter</h2>
			{/* Reset Filters Button */}
			<p
			  className="cursor-pointer text-xs text-primary_yellow hover:text-light_yellow hover:underline"
			  onClick={clearFilters}
			>
			  Clear filters
			</p>
		  </div>
		  <form action="submit">
			{/* Job Hours Container */}
			<div className="mb-2">
			  <h3 className="mb-2 text-base">Job Type</h3>
			  {/* Full time box */}
			  <div className="mb-1.5 flex items-center">
				<input
				  type="checkbox"
				  className="mr-1.5 cursor-pointer rounded-sm"
				  checked={filters.jobType.has("Fulltime")}
				  onChange={() => handleFilter("jobType", "Fulltime")}
				/>
				<label
				  className="cursor-pointer pt-[0.1rem] text-sm font-normal"
				  htmlFor="fulltime"
				>
				  Fulltime
				</label>
			  </div>
			  {/* Part time box */}
			  <div className="mb-1.5 flex items-center">
				<input
				  type="checkbox"
				  className="mr-1.5 cursor-pointer rounded-sm"
				  checked={filters.jobType.has("Partime")}
				  onChange={() => handleFilter("jobType", "Partime")}
				/>
				<label
				  className="cursor-pointer pt-[0.1rem] text-sm font-normal"
				  htmlFor="partTime"
				>
				  Parttime
				</label>
			  </div>
			</div>

			{/* Job Type Container */}
			<div className="mb-2">
			  <h3 className="mb-2 text-base">Position Type</h3>
			  {/* Internship box */}
			  <div className="mb-1.5 flex items-center">
				<input
				  type="checkbox"
				  className="mr-1.5 cursor-pointer rounded-sm"
				  checked={filters.positionType.has("Internship")}
				  onChange={() => handleFilter("positionType", "Internship")}
				/>
				<label
				  className="cursor-pointer pt-[0.1rem] text-sm font-normal"
				  htmlFor="internship"
				>
				  Internship
				</label>
			  </div>
			  {/* New-grad box */}
			  <div className="mb-1.5 flex items-center">
				<input
				  type="checkbox"
				  className="mr-1.5 cursor-pointer rounded-sm"
				  checked={filters.positionType.has("New-Grad")}
				  onChange={() => handleFilter("positionType", "New-Grad")}
				/>
				<label
				  className="cursor-pointer pt-[0.1rem] text-sm font-normal"
				  htmlFor="newGrad"
				>
				  New-Grad
				</label>
			  </div>
			</div>

			{/* Job location Container */}
			<div className="mb-9">
			  <h3 className="mb-2 text-base">Job location</h3>
			  {/* On-site box */}
			  <div className="mb-1.5 flex items-center">
				<input
				  type="checkbox"
				  className="mr-1.5 cursor-pointer rounded-sm"
				  checked={filters.jobLocation.has("On-Site")}
				  onChange={() => handleFilter("jobLocation", "On-Site")}
				/>
				<label
				  className="cursor-pointer pt-[0.1rem] text-sm font-normal"
				  htmlFor="onSite"
				>
				  On-Site
				</label>
			  </div>
			  {/* Hybrid box */}
			  <div className="mb-1.5 flex items-center">
				<input
				  type="checkbox"
				  className="mr-1.5 cursor-pointer rounded-sm"
				  checked={filters.jobLocation.has("Hybrid")}
				  onChange={() => handleFilter("jobLocation", "Hybrid")}
				/>
				<label
				  className="cursor-pointer pt-[0.1rem] text-sm font-normal"
				  htmlFor="hybrid"
				>
				  Hybrid
				</label>
			  </div>
			  {/* Remote box */}
			  <div className="mb-1.5 flex items-center">
				<input
				  type="checkbox"
				  className="mr-1.5 cursor-pointer rounded-sm"
				  checked={filters.jobLocation.has("Remote")}
				  onChange={() => handleFilter("jobLocation", "Remote")}
				/>
				<label
				  className="cursor-pointer pt-[0.1rem] text-sm font-normal"
				  htmlFor="remote"
				>
				  Remote
				</label>
			  </div>
			</div>

			{/* Apply Filter Button */}
			<button
			  id="filter-btn"
			  type="button"
			  className="mb-2 mr-2 rounded-lg bg-primary_yellow px-5 py-2.5 text-sm
							  font-medium text-black hover:bg-light_yellow focus:ring-light_yellow dark:focus:ring-yellow-900"
			  onClick={() => applyFilters(router)}
			>
			  Apply Filter
			</button>
		  </form>
		</div>
	);
}
