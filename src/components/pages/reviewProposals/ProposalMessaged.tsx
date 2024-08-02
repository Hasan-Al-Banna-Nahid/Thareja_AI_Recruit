import FreelancerInvitationModalWrapper from "@/components/shared/modal/FreelancerInvitationModal";
import FreelancersDetailsCard from "../inviteFreelancers/FreelancersDetailsCard";

const ProposalMessaged = () => {
  return (
    <div className="flex flex-col gap-10">
      <FreelancersDetailsCard />
      <FreelancersDetailsCard />
      <FreelancersDetailsCard />
      <FreelancersDetailsCard />
      <FreelancersDetailsCard />
      <FreelancersDetailsCard />

      {/* ======== Freelancer invite modal ========= */}
      <FreelancerInvitationModalWrapper />
    </div>
  );
};

export default ProposalMessaged;
