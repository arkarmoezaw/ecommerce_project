import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight
} from 'react-icons/md';

export default function Pagination({
  pageNumber,
  setPageNumber,
  totalItem,
  showItem,
  parPage
}) {
  let totalPage = Math.ceil(totalItem / parPage);
  let startPage = pageNumber;

  let dif = totalPage - pageNumber;

  if (dif <= showItem) {
    startPage = totalPage - showItem;
  }

  let endPage = startPage < 0 ? showItem : showItem + startPage;

  if (startPage <= 0) startPage = 1;

  const createBtn = () => {
    const btns = [];
    for (let i = startPage; i <= endPage; i++) {
      btns.push(
        <li
          onClick={() => setPageNumber(i)}
          key={i}
          className={`${pageNumber === i ? 'bg-indigo-300/50 text-white shadow-lg shadow-indigo-300' : 'bg-slate-600 text-[#d0d2d6] shadow-lg hover:bg-indigo-400 hover:text-white hover:shadow-indigo-500/50'} flex h-8.25 w-8.25 cursor-pointer items-center justify-center rounded-full`}
        >
          {i}
        </li>
      );
    }

    return btns;
  };

  return (
    <ul className="flex gap-3">
      {pageNumber > 1 && (
        <li
          onClick={() => setPageNumber(pageNumber - 1)}
          className="flex h-8.25 w-8.25 items-center justify-center rounded-full bg-slate-300 text-black"
        >
          <MdOutlineKeyboardDoubleArrowLeft />
        </li>
      )}
      {createBtn()}
      {pageNumber < totalPage && (
        <li
          onClick={() => setPageNumber(pageNumber + 1)}
          className="flex h-8.25 w-8.25 items-center justify-center rounded-full bg-slate-300 text-black"
        >
          <MdOutlineKeyboardDoubleArrowRight />
        </li>
      )}
    </ul>
  );
}
