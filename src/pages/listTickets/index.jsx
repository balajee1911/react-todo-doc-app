import "./style.scss";
import { useEffect, useState } from "react";
import { deleteRecord, getAllRecords } from "../../services/services";
import RecordView from "../../components/recordView";
import { recordsHeader } from "../../common/constant";
import SearchBox from "../../components/searchBox";
import AddRecord from "../../components/dailog/addRecord";
import DeleteDialog from "../../components/dailog/deleteDialog";

const ListTickets = () => {
  const [showAddComponent, setshowAddComponent] = useState(false);
  const [openDeleteWarning, setOpenDeleteWarning] = useState(false);
  const [allRecords, setAllRecords] = useState([]);
  const [sortOrder, setsortOrder] = useState("ascen");
  const [searchTermText, setsearchTermText] = useState("");
  const [deleteDataId, setDeleteDataId] = useState();
  const [isdeleteData, setIsDeleteData] = useState(false);
  const [getRecords, setGetRecords] = useState(false);
  const [showOptions, setShowOptions] = useState();
  const fetchAllRecords = async (sortBy, sortDirection, searchTerm) => {
    sortDirection === "desc" ? setsortOrder("ascen") : setsortOrder("desc");
    const records = await getAllRecords(sortBy, sortDirection, searchTerm);
    setAllRecords([...records?.todos] || []);
  };

  const deleteCurrentRecord = async () => {
    if (isdeleteData) {
      const response = await deleteRecord(deleteDataId);
      if (response?.status === 200) {
        setIsDeleteData("");
        setShowOptions(false);
        setAllRecords(
          allRecords.filter((record) => record?._id !== deleteDataId)
        );
      }
    }
  };

  useEffect(() => {
    searchTermText !== ""
      ? setTimeout(() => {
          fetchAllRecords("", "desc", searchTermText);
        }, 2000)
      : fetchAllRecords();
  }, [searchTermText, getRecords]);

  useEffect(() => {
    deleteCurrentRecord();
  }, [isdeleteData]);

  return (
    <div className="list__records__page">
      {showAddComponent && (
        <AddRecord
          open={true}
          setOpen={setshowAddComponent}
          getRecords={setGetRecords}
        />
      )}
      <div className="list__records">
        <SearchBox setState={setsearchTermText} />
        <h1>All Tickets</h1>
        <div className="add__record__button">
          <button onClick={() => setshowAddComponent(true)}>Add Record</button>
        </div>
        <div className="record__view">
          <p
            onClick={() => fetchAllRecords("title", sortOrder, searchTermText)}
          >
            {recordsHeader.title}
          </p>
          <p
            onClick={() =>
              fetchAllRecords("description", sortOrder, searchTermText)
            }
          >
            {recordsHeader.description}
          </p>
          <p
            onClick={() =>
              fetchAllRecords("priority", sortOrder, searchTermText)
            }
          >
            {recordsHeader.priority}
          </p>
          <p
            onClick={() =>
              fetchAllRecords("createdAt", sortOrder, searchTermText)
            }
          >
            {recordsHeader.createdAt}
          </p>
          <p
            onClick={() =>
              fetchAllRecords("updatedAt", sortOrder, searchTermText)
            }
          >
            {recordsHeader.updatedAt}
          </p>
        </div>
        {allRecords?.length > 0 ? (
          allRecords.map((record, index) => {
            return (
              <RecordView
                key={index}
                index={index}
                record={record}
                setShowOptions={setShowOptions}
                showOptions={showOptions}
                setDeleteData={setDeleteDataId}
                openDeleteWarning={setOpenDeleteWarning}
              />
            );
          })
        ) : (
          <div className="record__view no_records">
            <p>Nothing to show</p>
          </div>
        )}
      </div>
      {openDeleteWarning && (
        <DeleteDialog
          open={openDeleteWarning}
          setOpen={setOpenDeleteWarning}
          setWarnResponse={setIsDeleteData}
        />
      )}
    </div>
  );
};

export default ListTickets;
