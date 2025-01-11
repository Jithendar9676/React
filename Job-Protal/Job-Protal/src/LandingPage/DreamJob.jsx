import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const DreamJob = () => {
    return (
        <div className="flex items-center px-16">
            <div className="flex flex-col w-[45%] gap-3">
                <div className=" text-7xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400">
                    Find your <span >dream </span>
                    <span>job </span> with us
                </div>
                <div className="text-2xl text-mine-shaft-200">
                    Good life begins with a good company. Start explore  thousands of jobs in one place.
                </div>
                <div className="flex gap-3 mt-5">
                    <TextInput  className="text-lg text-mine-shaft-100 bg-mine-shaft-900 p-2 rounded-lg [&_input]:!text-mine-shaft-100" variant="unstyled"
                        label="Job Tittle"
                        placeholder="Software Engineer"
                    />
                    <TextInput className="text-lg text-mine-shaft-100 bg-mine-shaft-900 p-2 rounded-lg [&_input]:!text-mine-shaft-100" variant="unstyled"    
                        label="Job Type"
                        placeholder="Full Time"
                    />
                    <div className="flex h-full w-20 items-center justify-center text-mine-shaft-400 bg-bright-sun-300 rounded-xl p-3 hover:bg-bright-sun-500  cursor-pointer">
                        <IconSearch className="h-[100%] w-[100%]"/>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center w-[55%]">
                <div className="w-[33rem]">
                    <img src="proj-mgt.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default DreamJob;