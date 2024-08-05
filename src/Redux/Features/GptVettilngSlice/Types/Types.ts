export interface TabsState {
  activeTab: string;
}

export type TabsAction = {
  type: "SET_ACTIVE_TAB";
  payload: string;
};

// Define the PropsType for JobsPagination component
export interface JobsPaginationProps {
  currentPage: number;
  totalPage: number;
  setCurrentPage: (page: number) => void;
}

// Define the initial state type for the modal
export interface ModalState {
  isOpen: boolean;
}

// Define the ButtonProps interface for the Button component
export interface ButtonProps {
  svgSrc: string;
  text: string;
  buttonClassName: string;
  onClick?: () => void;
}
