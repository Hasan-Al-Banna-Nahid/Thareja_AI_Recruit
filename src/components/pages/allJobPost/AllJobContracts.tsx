import AllContractsFilter from "./AllContractsFilter";
import AllJobContractsContent from "./AllJobContractsContent";

const AllJobContracts = () => {
  return (
    <div className="w-full ">
      <div className="title-top w-full  mb-[28px]">
        <h1 className="text-[30px] lg:text-[60px] tracking-[-1.8px] text-[#30353E]">
          All contracts
        </h1>
        <div>
          <AllContractsFilter />
          <AllJobContractsContent />
        </div>
      </div>
    </div>
  );
};

export default AllJobContracts;
