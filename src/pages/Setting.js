import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PageHeader from "../Components/PageHeader";
import SettingItem from "../Components/SettingItem";
import Modal from "../Components/Modal";

import { HiOutlineDatabase } from "react-icons/hi";
import { AiOutlineImport } from "react-icons/ai";

import selfClearTimeout from "../utils/selfClearTimeout";
import persian from "persian-date";

import { setLastImportedBackupFile } from "../Store/slices/SettingSlice";

const Setting = () => {
  const [localSStr, setLocalSStr] = useState("");
  const [uploadSureChecker, setUploadSureChecker] = useState(false);
  const [isUploadingFinished, setIsUploadingFinished] = useState(false);

  const dispatch = useDispatch();
  const lastImportedBackupFile = useSelector(
    (state) => state.setting.lastImportedBackupFile
  );

  const ref = useRef();
  const fileUploaderRef = useRef();

  const backupHandler = () => {
    setLocalSStr(
      "data:text/json;charset=utf-8," +
        encodeURIComponent(JSON.stringify({ ...localStorage }))
    );
    ref.current.click();
  };
  const modalTrigger = () => {
    setUploadSureChecker(true);
  };
  const uploadHandler = () => {
    fileUploaderRef.current.click();
  };

  const fileUploaderHandler = ({ target: { files } }) => {
    const file = files[0];
    const { name } = file;
    const recoveryFileTime = +name.slice(
      name.indexOf("-") + 1,
      name.indexOf(".")
    );

    if (file) {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onloadend = function (e) {
        const recoveredLocalSt = JSON.parse(e.target.result);
        // clearing entire localstorage , and re assigns it with new object
        console.log(e);
        localStorage.clear();
        for (let key in recoveredLocalSt) {
          if (recoveredLocalSt.hasOwnProperty(key)) {
            localStorage.setItem(key, recoveredLocalSt[key]);
          }
        }
        setIsUploadingFinished(true);
        dispatch(setLastImportedBackupFile(recoveryFileTime));
        selfClearTimeout(() => {
          window.location.reload();
        }, 4000);
      };
    } else {
      // fallback
      alert("مشکلی در دریافت فایل وجود دارد");
    }
  };
  return (
    <div className="container">
      <div className="row">
        <PageHeader title="تنظیمات" />
      </div>
      <div className="row">
        <SettingItem
          title="دریافت نسخه پشتیبان"
          ctaIcon={<HiOutlineDatabase />}
          ctaText="دریافت"
          actionHandler={backupHandler}
        >
          <p>
            میتوانید برای نگه داری و دریافت نسخه پشتیبان از محصولات وارد شده ,
            از این روش استفاده کنید
          </p>
          <a
            ref={ref}
            style={{ display: "none" }}
            href={localSStr}
            download={`localSTBackup-${Date.now()}.json`}
          >
            ""
          </a>
        </SettingItem>
        <SettingItem
          title="وارد کردن نسخه پشتیان"
          ctaText="وارد کردن"
          ctaIcon={<AiOutlineImport />}
          actionHandler={modalTrigger}
        >
          <div>
            <p>
              با وارد کردن نسخه پشتیبان دریافت کرده , به آخرین وضعیت لیست
              محصولات و فاکتور های خود بازگردید
            </p>

            <p className="">
              اخرین نسخه وارد شده به عنوان فایل پشتیبان , نسخه{" "}
              {lastImportedBackupFile} می باشد که در تاریخ{" "}
              {new persian(lastImportedBackupFile).format("YYYY/MM/DD")}
              تهیه شده است
            </p>
          </div>
          <input
            onChange={fileUploaderHandler}
            style={{ display: "none" }}
            type="file"
            ref={fileUploaderRef}
          />
          {uploadSureChecker && (
            <Modal
              style={{ position: "fixed" }}
              trigger={!isUploadingFinished ? setUploadSureChecker : () => {}}
            >
              {isUploadingFinished ? (
                <p>
                  تغییرات محتوای فایل پشتیان مورد نظر با موفقیت اعمال شد , تا 3
                  ثانیه دیگر صفحه مجددا اجرا خواهد شد
                </p>
              ) : (
                <>
                  <p>
                    آیا از وارد کردن فایل پشتیان اطمینان دارید ؟ با این عمل لیست
                    محصولات و فاکتور های شما کاملا حذف خواهند شد
                  </p>
                  <div className="d-flex ">
                    <button className="btn" onClick={uploadHandler}>
                      بله
                    </button>
                    <button
                      className="btn "
                      onClick={() => setUploadSureChecker(false)}
                    >
                      خیر
                    </button>
                  </div>
                </>
              )}
            </Modal>
          )}
        </SettingItem>
      </div>
    </div>
  );
};

export default Setting;
