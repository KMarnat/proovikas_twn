// import { createContext, useContext, useState } from "react";

// interface AppContextProps {
//   tableData: {};
//   setTableData: React.Dispatch<React.SetStateAction<any>>;
//   selectedId: string;
//   setSelectedId: React.Dispatch<React.SetStateAction<string>>;
// }

// const AppContext = createContext<AppContextProps | undefined>(undefined);

// export const useAppContext = (): AppContextProps => {
//   const context = useContext(AppContext);

//   if (!context) {
//     throw new Error("useAppContext must be used within an AppProvider");
//   }

//   return context;
// };

// interface AppProviderProps {
//   children: React.ReactNode;
// }

// export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
//   const [tableData, setTableData] = useState<any | null>(null);
//   const [selectedId, setSelectedId] = useState<string>("");

//   const contextValue: AppContextProps = {
//     tableData,
//     setTableData,
//     selectedId,
//     setSelectedId,
//   };

//   return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
// };
