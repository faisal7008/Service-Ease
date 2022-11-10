import { Spinner } from "flowbite-react";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function surveyForm() {
  return (
    <>
      <ul className="form-section page-section">
        <li id="cid_1" className="form-input-wide" data-type="control_head">
          <div className="form-header-group  header-default">
            <div className="header-text httac htvam">
              <h2 id="header_1" className="form-header" data-component="header">
                Employee Engagement Survey
              </h2>
            </div>
          </div>
        </li>
        <li id="cid_5" className="form-input-wide" data-type="control_head">
          <div className="form-header-group  header-default">
            <div className="header-text httal htvam">
              <h2 id="header_5" className="form-header" data-component="header">
                Please answer the questions below on a scale of 1 (Strongly
                Disagree) to 5 (Strongly Agree)
              </h2>
            </div>
          </div>
        </li>
        <li
          className="form-line jf-required"
          data-type="control_scale"
          id="id_7"
        >
          <label
            className="form-label form-label-top form-label-auto"
            id="label_7"
            htmlFor="input_7"
          >
            I would recommend the company as a great place to work.
            <span className="form-required">*</span>
          </label>
          <div id="cid_7" className="form-input-wide jf-required">
            <span
              className="form-sub-label-container"
              style={{ verticalAlign: "top" }}
            >
              <table
                role="radiogroup"
                aria-labelledby="label_7 sublabel_input_7_description"
                cellPadding={4}
                cellSpacing={0}
                className="form-scale-table"
                data-component="scale"
              >
                <tbody>
                  <tr>
                    <th>&nbsp;</th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_7_1"> 1 </label>
                    </th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_7_2"> 2 </label>
                    </th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_7_3"> 3 </label>
                    </th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_7_4"> 4 </label>
                    </th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_7_5"> 5 </label>
                    </th>
                    <th>&nbsp;</th>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="input_7_worst" aria-hidden="true">
                        {" "}
                        Strongly Disagree{" "}
                      </label>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q7_iWould7"
                        defaultValue={1}
                        title={1}
                        id="input_7_1"
                        required=""
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q7_iWould7"
                        defaultValue={2}
                        title={2}
                        id="input_7_2"
                        required=""
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q7_iWould7"
                        defaultValue={3}
                        title={3}
                        id="input_7_3"
                        required=""
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q7_iWould7"
                        defaultValue={4}
                        title={4}
                        id="input_7_4"
                        required=""
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q7_iWould7"
                        defaultValue={5}
                        title={5}
                        id="input_7_5"
                        required=""
                      />
                    </td>
                    <td>
                      <label htmlFor="input_7_best" aria-hidden="true">
                        {" "}
                        Strongly Agree{" "}
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
              <label
                className="form-sub-label"
                id="sublabel_input_7_description"
                style={{
                  border: 0,
                  clip: "rect(0 0 0 0)",
                  height: 1,
                  margin: "-1px",
                  overflow: "hidden",
                  padding: 0,
                  position: "absolute",
                  width: 1,
                  whiteSpace: "nowrap",
                }}
                aria-hidden="false"
              >
                {" "}
                1 is Strongly Disagree, 5 is Strongly Agree{" "}
              </label>
            </span>
          </div>
        </li>
        <li
          className="form-line jf-required"
          data-type="control_scale"
          id="id_20"
        >
          <label
            className="form-label form-label-top form-label-auto"
            id="label_20"
            htmlFor="input_20"
          >
            I feel like I have the freedom to choose how to do my job best.
            <span className="form-required">*</span>
          </label>
          <div id="cid_20" className="form-input-wide jf-required">
            <span
              className="form-sub-label-container"
              style={{ verticalAlign: "top" }}
            >
              <table
                role="radiogroup"
                aria-labelledby="label_20 sublabel_input_20_description"
                cellPadding={4}
                cellSpacing={0}
                className="form-scale-table"
                data-component="scale"
              >
                <tbody>
                  <tr>
                    <th>&nbsp;</th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_20_1"> 1 </label>
                    </th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_20_2"> 2 </label>
                    </th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_20_3"> 3 </label>
                    </th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_20_4"> 4 </label>
                    </th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_20_5"> 5 </label>
                    </th>
                    <th>&nbsp;</th>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="input_20_worst" aria-hidden="true">
                        {" "}
                        Strongly Disagree{" "}
                      </label>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q20_iFeel20"
                        defaultValue={1}
                        title={1}
                        id="input_20_1"
                        required=""
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q20_iFeel20"
                        defaultValue={2}
                        title={2}
                        id="input_20_2"
                        required=""
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q20_iFeel20"
                        defaultValue={3}
                        title={3}
                        id="input_20_3"
                        required=""
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q20_iFeel20"
                        defaultValue={4}
                        title={4}
                        id="input_20_4"
                        required=""
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q20_iFeel20"
                        defaultValue={5}
                        title={5}
                        id="input_20_5"
                        required=""
                      />
                    </td>
                    <td>
                      <label htmlFor="input_20_best" aria-hidden="true">
                        {" "}
                        Strongly Agree{" "}
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
              <label
                className="form-sub-label"
                id="sublabel_input_20_description"
                style={{
                  border: 0,
                  clip: "rect(0 0 0 0)",
                  height: 1,
                  margin: "-1px",
                  overflow: "hidden",
                  padding: 0,
                  position: "absolute",
                  width: 1,
                  whiteSpace: "nowrap",
                }}
                aria-hidden="false"
              >
                {" "}
                1 is Strongly Disagree, 5 is Strongly Agree{" "}
              </label>
            </span>
          </div>
        </li>
        <li
          className="form-line jf-required"
          data-type="control_scale"
          id="id_8"
        >
          <label
            className="form-label form-label-top form-label-auto"
            id="label_8"
            htmlFor="input_8"
          >
            My manager is a resource to me.
            <span className="form-required">*</span>
          </label>
          <div id="cid_8" className="form-input-wide jf-required">
            <span
              className="form-sub-label-container"
              style={{ verticalAlign: "top" }}
            >
              <table
                role="radiogroup"
                aria-labelledby="label_8 sublabel_input_8_description"
                cellPadding={4}
                cellSpacing={0}
                className="form-scale-table"
                data-component="scale"
              >
                <tbody>
                  <tr>
                    <th>&nbsp;</th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_8_1"> 1 </label>
                    </th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_8_2"> 2 </label>
                    </th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_8_3"> 3 </label>
                    </th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_8_4"> 4 </label>
                    </th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_8_5"> 5 </label>
                    </th>
                    <th>&nbsp;</th>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="input_8_worst" aria-hidden="true">
                        {" "}
                        Strongly Disagree{" "}
                      </label>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q8_myManager"
                        defaultValue={1}
                        title={1}
                        id="input_8_1"
                        required=""
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q8_myManager"
                        defaultValue={2}
                        title={2}
                        id="input_8_2"
                        required=""
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q8_myManager"
                        defaultValue={3}
                        title={3}
                        id="input_8_3"
                        required=""
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q8_myManager"
                        defaultValue={4}
                        title={4}
                        id="input_8_4"
                        required=""
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q8_myManager"
                        defaultValue={5}
                        title={5}
                        id="input_8_5"
                        required=""
                      />
                    </td>
                    <td>
                      <label htmlFor="input_8_best" aria-hidden="true">
                        {" "}
                        Strongly Agree{" "}
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
              <label
                className="form-sub-label"
                id="sublabel_input_8_description"
                style={{
                  border: 0,
                  clip: "rect(0 0 0 0)",
                  height: 1,
                  margin: "-1px",
                  overflow: "hidden",
                  padding: 0,
                  position: "absolute",
                  width: 1,
                  whiteSpace: "nowrap",
                }}
                aria-hidden="false"
              >
                {" "}
                1 is Strongly Disagree, 5 is Strongly Agree{" "}
              </label>
            </span>
          </div>
        </li>
        <li
          className="form-line jf-required"
          data-type="control_scale"
          id="id_10"
        >
          <label
            className="form-label form-label-top form-label-auto"
            id="label_10"
            htmlFor="input_10"
          >
            I have access to the tools and resources I need to do my job well.
            <span className="form-required">*</span>
          </label>
          <div id="cid_10" className="form-input-wide jf-required">
            <span
              className="form-sub-label-container"
              style={{ verticalAlign: "top" }}
            >
              <table
                role="radiogroup"
                aria-labelledby="label_10 sublabel_input_10_description"
                cellPadding={4}
                cellSpacing={0}
                className="form-scale-table"
                data-component="scale"
              >
                <tbody>
                  <tr>
                    <th>&nbsp;</th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_10_1"> 1 </label>
                    </th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_10_2"> 2 </label>
                    </th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_10_3"> 3 </label>
                    </th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_10_4"> 4 </label>
                    </th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_10_5"> 5 </label>
                    </th>
                    <th>&nbsp;</th>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="input_10_worst" aria-hidden="true">
                        {" "}
                        Strongly Disagree{" "}
                      </label>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q10_iHave"
                        defaultValue={1}
                        title={1}
                        id="input_10_1"
                        required=""
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q10_iHave"
                        defaultValue={2}
                        title={2}
                        id="input_10_2"
                        required=""
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q10_iHave"
                        defaultValue={3}
                        title={3}
                        id="input_10_3"
                        required=""
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q10_iHave"
                        defaultValue={4}
                        title={4}
                        id="input_10_4"
                        required=""
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q10_iHave"
                        defaultValue={5}
                        title={5}
                        id="input_10_5"
                        required=""
                      />
                    </td>
                    <td>
                      <label htmlFor="input_10_best" aria-hidden="true">
                        {" "}
                        Strongly Agree{" "}
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
              <label
                className="form-sub-label"
                id="sublabel_input_10_description"
                style={{
                  border: 0,
                  clip: "rect(0 0 0 0)",
                  height: 1,
                  margin: "-1px",
                  overflow: "hidden",
                  padding: 0,
                  position: "absolute",
                  width: 1,
                  whiteSpace: "nowrap",
                }}
                aria-hidden="false"
              >
                {" "}
                1 is Strongly Disagree, 5 is Strongly Agree{" "}
              </label>
            </span>
          </div>
        </li>
        <li
          className="form-line jf-required"
          data-type="control_scale"
          id="id_11"
        >
          <label
            className="form-label form-label-top form-label-auto"
            id="label_11"
            htmlFor="input_11"
          >
            Most of the systems and processes at the company help support me in
            doing my job well.
            <span className="form-required">*</span>
          </label>
          <div id="cid_11" className="form-input-wide jf-required">
            <span
              className="form-sub-label-container"
              style={{ verticalAlign: "top" }}
            >
              <table
                role="radiogroup"
                aria-labelledby="label_11 sublabel_input_11_description"
                cellPadding={4}
                cellSpacing={0}
                className="form-scale-table"
                data-component="scale"
              >
                <tbody>
                  <tr>
                    <th>&nbsp;</th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_11_1"> 1 </label>
                    </th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_11_2"> 2 </label>
                    </th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_11_3"> 3 </label>
                    </th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_11_4"> 4 </label>
                    </th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_11_5"> 5 </label>
                    </th>
                    <th>&nbsp;</th>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="input_11_worst" aria-hidden="true">
                        {" "}
                        Strongly Disagree{" "}
                      </label>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q11_mostOf11"
                        defaultValue={1}
                        title={1}
                        id="input_11_1"
                        required=""
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q11_mostOf11"
                        defaultValue={2}
                        title={2}
                        id="input_11_2"
                        required=""
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q11_mostOf11"
                        defaultValue={3}
                        title={3}
                        id="input_11_3"
                        required=""
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q11_mostOf11"
                        defaultValue={4}
                        title={4}
                        id="input_11_4"
                        required=""
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q11_mostOf11"
                        defaultValue={5}
                        title={5}
                        id="input_11_5"
                        required=""
                      />
                    </td>
                    <td>
                      <label htmlFor="input_11_best" aria-hidden="true">
                        {" "}
                        Strongly Agree{" "}
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
              <label
                className="form-sub-label"
                id="sublabel_input_11_description"
                style={{
                  border: 0,
                  clip: "rect(0 0 0 0)",
                  height: 1,
                  margin: "-1px",
                  overflow: "hidden",
                  padding: 0,
                  position: "absolute",
                  width: 1,
                  whiteSpace: "nowrap",
                }}
                aria-hidden="false"
              >
                {" "}
                1 is Strongly Disagree, 5 is Strongly Agree{" "}
              </label>
            </span>
          </div>
        </li>
        <li
          className="form-line jf-required"
          data-type="control_scale"
          id="id_12"
        >
          <label
            className="form-label form-label-top form-label-auto"
            id="label_12"
            htmlFor="input_12"
          >
            I receive appropriate recognition when I do my job well.
            <span className="form-required">*</span>
          </label>
          <div id="cid_12" className="form-input-wide jf-required">
            <span
              className="form-sub-label-container"
              style={{ verticalAlign: "top" }}
            >
              <table
                role="radiogroup"
                aria-labelledby="label_12 sublabel_input_12_description"
                cellPadding={4}
                cellSpacing={0}
                className="form-scale-table"
                data-component="scale"
              >
                <tbody>
                  <tr>
                    <th>&nbsp;</th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_12_1"> 1 </label>
                    </th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_12_2"> 2 </label>
                    </th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_12_3"> 3 </label>
                    </th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_12_4"> 4 </label>
                    </th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_12_5"> 5 </label>
                    </th>
                    <th>&nbsp;</th>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="input_12_worst" aria-hidden="true">
                        {" "}
                        Strongly Disagree{" "}
                      </label>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q12_iReceive"
                        defaultValue={1}
                        title={1}
                        id="input_12_1"
                        required=""
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q12_iReceive"
                        defaultValue={2}
                        title={2}
                        id="input_12_2"
                        required=""
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q12_iReceive"
                        defaultValue={3}
                        title={3}
                        id="input_12_3"
                        required=""
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q12_iReceive"
                        defaultValue={4}
                        title={4}
                        id="input_12_4"
                        required=""
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q12_iReceive"
                        defaultValue={5}
                        title={5}
                        id="input_12_5"
                        required=""
                      />
                    </td>
                    <td>
                      <label htmlFor="input_12_best" aria-hidden="true">
                        {" "}
                        Strongly Agree{" "}
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
              <label
                className="form-sub-label"
                id="sublabel_input_12_description"
                style={{
                  border: 0,
                  clip: "rect(0 0 0 0)",
                  height: 1,
                  margin: "-1px",
                  overflow: "hidden",
                  padding: 0,
                  position: "absolute",
                  width: 1,
                  whiteSpace: "nowrap",
                }}
                aria-hidden="false"
              >
                {" "}
                1 is Strongly Disagree, 5 is Strongly Agree{" "}
              </label>
            </span>
          </div>
        </li>
        <li
          className="form-line jf-required"
          data-type="control_scale"
          id="id_22"
        >
          <label
            className="form-label form-label-top form-label-auto"
            id="label_22"
            htmlFor="input_22"
          >
            I see myself working here in 3 years.
            <span className="form-required">*</span>
          </label>
          <div id="cid_22" className="form-input-wide jf-required">
            <span
              className="form-sub-label-container"
              style={{ verticalAlign: "top" }}
            >
              <table
                role="radiogroup"
                aria-labelledby="label_22 sublabel_input_22_description"
                cellPadding={4}
                cellSpacing={0}
                className="form-scale-table"
                data-component="scale"
              >
                <tbody>
                  <tr>
                    <th>&nbsp;</th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_22_1"> 1 </label>
                    </th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_22_2"> 2 </label>
                    </th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_22_3"> 3 </label>
                    </th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_22_4"> 4 </label>
                    </th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_22_5"> 5 </label>
                    </th>
                    <th>&nbsp;</th>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="input_22_worst" aria-hidden="true">
                        {" "}
                        Strongly Disagree{" "}
                      </label>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q22_iSee"
                        defaultValue={1}
                        title={1}
                        id="input_22_1"
                        required=""
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q22_iSee"
                        defaultValue={2}
                        title={2}
                        id="input_22_2"
                        required=""
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q22_iSee"
                        defaultValue={3}
                        title={3}
                        id="input_22_3"
                        required=""
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q22_iSee"
                        defaultValue={4}
                        title={4}
                        id="input_22_4"
                        required=""
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q22_iSee"
                        defaultValue={5}
                        title={5}
                        id="input_22_5"
                        required=""
                      />
                    </td>
                    <td>
                      <label htmlFor="input_22_best" aria-hidden="true">
                        {" "}
                        Strongly Agree{" "}
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
              <label
                className="form-sub-label"
                id="sublabel_input_22_description"
                style={{
                  border: 0,
                  clip: "rect(0 0 0 0)",
                  height: 1,
                  margin: "-1px",
                  overflow: "hidden",
                  padding: 0,
                  position: "absolute",
                  width: 1,
                  whiteSpace: "nowrap",
                }}
                aria-hidden="false"
              >
                {" "}
                1 is Strongly Disagree, 5 is Strongly Agree{" "}
              </label>
            </span>
          </div>
        </li>
        <li
          className="form-line jf-required"
          data-type="control_scale"
          id="id_29"
        >
          <label
            className="form-label form-label-top form-label-auto"
            id="label_29"
            htmlFor="input_29"
          >
            The company provides the tools for me to grow professionally and
            personally.
            <span className="form-required">*</span>
          </label>
          <div id="cid_29" className="form-input-wide jf-required">
            <span
              className="form-sub-label-container"
              style={{ verticalAlign: "top" }}
            >
              <table
                role="radiogroup"
                aria-labelledby="label_29 sublabel_input_29_description"
                cellPadding={4}
                cellSpacing={0}
                className="form-scale-table"
                data-component="scale"
              >
                <tbody>
                  <tr>
                    <th>&nbsp;</th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_29_1"> 1 </label>
                    </th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_29_2"> 2 </label>
                    </th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_29_3"> 3 </label>
                    </th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_29_4"> 4 </label>
                    </th>
                    <th style={{ textAlign: "center" }}>
                      <label htmlFor="input_29_5"> 5 </label>
                    </th>
                    <th>&nbsp;</th>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="input_29_worst" aria-hidden="true">
                        {" "}
                        Strongly Disagree{" "}
                      </label>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q29_theCompany"
                        defaultValue={1}
                        title={1}
                        id="input_29_1"
                        required=""
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q29_theCompany"
                        defaultValue={2}
                        title={2}
                        id="input_29_2"
                        required=""
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q29_theCompany"
                        defaultValue={3}
                        title={3}
                        id="input_29_3"
                        required=""
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q29_theCompany"
                        defaultValue={4}
                        title={4}
                        id="input_29_4"
                        required=""
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        className="form-radio validate[required]"
                        name="q29_theCompany"
                        defaultValue={5}
                        title={5}
                        id="input_29_5"
                        required=""
                      />
                    </td>
                    <td>
                      <label htmlFor="input_29_best" aria-hidden="true">
                        {" "}
                        Strongly Agree{" "}
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
              <label
                className="form-sub-label"
                id="sublabel_input_29_description"
                style={{
                  border: 0,
                  clip: "rect(0 0 0 0)",
                  height: 1,
                  margin: "-1px",
                  overflow: "hidden",
                  padding: 0,
                  position: "absolute",
                  width: 1,
                  whiteSpace: "nowrap",
                }}
                aria-hidden="false"
              >
                {" "}
                1 is Strongly Disagree, 5 is Strongly Agree{" "}
              </label>
            </span>
          </div>
        </li>

        <li className="form-line" data-type="control_rating" id="id_26">
          <label
            className="form-label form-label-top form-label-auto"
            id="label_26"
            htmlFor="input_26"
          >
            {" "}
            Rate your Supervisor on a scale of 1-5 (1 being poor and 5 being
            excellent){" "}
          </label>
          <div id="cid_26" className="form-input-wide">
            <div
              id="input_26"
              name="q26_rateYour26"
              data-component="rating"
              className="form-star-rating"
              role="radiogroup"
              aria-labelledby="label_26"
              style={{ cursor: "default" }}
            >
              <div
                tabIndex={0}
                aria-label="1 out of 5"
                role="radio"
                aria-describedby="label_26"
                className="form-star-rating-star Stars"
                style={{
                  backgroundImage:
                    'url("https://cdn.jotfor.ms/images/stars.png")',
                }}
              />
              <div
                tabIndex={0}
                aria-label="2 out of 5"
                role="radio"
                aria-describedby="label_26"
                className="form-star-rating-star Stars"
                style={{
                  backgroundImage:
                    'url("https://cdn.jotfor.ms/images/stars.png")',
                }}
              />
              <div
                tabIndex={0}
                aria-label="3 out of 5"
                role="radio"
                aria-describedby="label_26"
                className="form-star-rating-star Stars"
                style={{
                  backgroundImage:
                    'url("https://cdn.jotfor.ms/images/stars.png")',
                }}
              />
              <div
                tabIndex={0}
                aria-label="4 out of 5"
                role="radio"
                aria-describedby="label_26"
                className="form-star-rating-star Stars"
                style={{
                  backgroundImage:
                    'url("https://cdn.jotfor.ms/images/stars.png")',
                }}
              />
              <div
                tabIndex={0}
                aria-label="5 out of 5"
                role="radio"
                aria-describedby="label_26"
                className="form-star-rating-star Stars"
                style={{
                  backgroundImage:
                    'url("https://cdn.jotfor.ms/images/stars.png")',
                }}
              />
              <div
                title="Cancel Your Rating"
                tabIndex={0}
                role="radio"
                aria-describedby="label_26"
                className="form-star-rating-star Stars"
                style={{
                  height: 16,
                  width: 16,
                  margin: "0.5px",
                  float: "left",
                  color: "rgb(153, 153, 153)",
                  fontSize: 12,
                  textAlign: "center",
                  display: "none",
                }}
              >
                {" "}
                x{" "}
              </div>
              <input
                type="hidden"
                name="q26_rateYour26"
                className="form-textbox form-star-rating-star Stars"
                tabIndex={0}
                role="radio"
                aria-describedby="label_26"
              />
            </div>
          </div>
        </li>
        <li className="form-line" data-type="control_textarea" id="id_27">
          <label
            className="form-label form-label-top form-label-auto"
            id="label_27"
            htmlFor="input_27"
          >
            {" "}
            What can your supervisor do to improve?{" "}
          </label>
          <div id="cid_27" className="form-input-wide">
            <textarea
              id="input_27"
              className="form-textarea"
              name="q27_whatCan"
              cols={40}
              rows={6}
              data-component="textarea"
              aria-labelledby="label_27"
              defaultValue={""}
            />
          </div>
        </li>
        <li className="form-line" data-type="control_textarea" id="id_30">
          <label
            className="form-label form-label-top form-label-auto"
            id="label_30"
            htmlFor="input_30"
          >
            {" "}
            How has your workplace environment changed since the pandemic?{" "}
          </label>
          <div id="cid_30" className="form-input-wide">
            <textarea
              id="input_30"
              className="form-textarea"
              name="q30_howHas30"
              cols={40}
              rows={6}
              data-component="textarea"
              aria-labelledby="label_30"
              defaultValue={""}
            />
          </div>
        </li>
        <li className="form-line" data-type="control_textarea" id="id_31">
          <label
            className="form-label form-label-top form-label-auto"
            id="label_31"
            htmlFor="input_31"
          >
            {" "}
            What new challenges have you faced since the pandemic?{" "}
          </label>
          <div id="cid_31" className="form-input-wide">
            <textarea
              id="input_31"
              className="form-textarea"
              name="q31_whatNew"
              cols={40}
              rows={6}
              data-component="textarea"
              aria-labelledby="label_31"
              defaultValue={""}
            />
          </div>
        </li>
        <li className="form-line" data-type="control_button" id="id_2">
          <div id="cid_2" className="form-input-wide">
            <div
              style={{ marginLeft: 156 }}
              data-align="auto"
              className="form-buttons-wrapper form-buttons-auto   jsTest-button-wrapperField"
            >
              <button
                id="input_2"
                type="submit"
                className="form-submit-button submit-button jf-form-buttons jsTest-submitField"
                data-component="button"
                data-content=""
              >
                Submit
              </button>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}
