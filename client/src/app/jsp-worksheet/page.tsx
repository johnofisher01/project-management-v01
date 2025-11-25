"use client";

import React, { useState } from "react";

interface FormData {
  name: string;
  date: string;
  jobNumber: string;
  address: string;
  worksCarriedOut: string;
  hours: string;
  workedWith: string;
  certificateShared: string[];
  materials: string;
  supplier: string;
  variationsExtras: string;
  hoursExtra: string;
  extraMaterials: string;
  supplierExtras: string;
}

const initialFormData: FormData = {
  name: "",
  date: "",
  jobNumber: "",
  address: "",
  worksCarriedOut: "",
  hours: "",
  workedWith: "",
  certificateShared: [],
  materials: "",
  supplier: "",
  variationsExtras: "",
  hoursExtra: "",
  extraMaterials: "",
  supplierExtras: "",
};

const certificateOptions = ["Minor Works", "EIC", "EICR", "N/A", "MATERIALS"];

export default function JSPWorksheetPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleCheckboxChange = (option: string) => {
    setFormData((prev) => {
      const newCertificates = prev.certificateShared.includes(option)
        ? prev.certificateShared.filter((item) => item !== option)
        : [...prev.certificateShared, option];
      return { ...prev, certificateShared: newCertificates };
    });
    if (errors.certificateShared) {
      setErrors((prev) => ({ ...prev, certificateShared: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.jobNumber.trim()) newErrors.jobNumber = "Job Number is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.worksCarriedOut.trim())
      newErrors.worksCarriedOut = "Works Carried Out is required";
    if (!formData.hours.trim()) newErrors.hours = "Hours is required";
    if (!formData.workedWith.trim()) newErrors.workedWith = "Worked With is required";
    if (formData.certificateShared.length === 0)
      newErrors.certificateShared = "Please select at least one certificate option";
    if (!formData.materials.trim()) newErrors.materials = "Materials is required";
    if (!formData.supplier.trim()) newErrors.supplier = "Supplier is required";
    if (!formData.variationsExtras.trim())
      newErrors.variationsExtras = "Variations - Extras is required";
    if (!formData.hoursExtra.trim()) newErrors.hoursExtra = "Hours Extra is required";
    if (!formData.extraMaterials.trim())
      newErrors.extraMaterials = "Extra Materials is required";
    if (!formData.supplierExtras.trim())
      newErrors.supplierExtras = "Supplier Extras is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Form data is ready to be sent to an API
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4 dark:bg-gray-900">
        <div className="w-full max-w-2xl rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
          <div className="text-center">
            <div className="mb-4 text-6xl">✓</div>
            <h2 className="mb-4 text-2xl font-bold text-green-600 dark:text-green-400">
              Form Submitted Successfully!
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Your JSP Worksheet has been recorded.
            </p>
            <button
              onClick={handleReset}
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Submit Another Response
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 dark:bg-gray-900">
      <div className="mx-auto max-w-2xl">
        {/* Form Header */}
        <div className="mb-6 overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800">
          <div className="h-2 bg-blue-600"></div>
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              JSP Worksheet
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Fill out the job sheet details below. All fields marked with * are required.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* NAME */}
          <FormField
            label="NAME"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            error={errors.name}
            required
          />

          {/* DATE */}
          <FormField
            label="DATE"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleInputChange}
            error={errors.date}
            required
            placeholder="Month, day, year"
          />

          {/* Job Number */}
          <FormField
            label="Job Number"
            name="jobNumber"
            type="text"
            value={formData.jobNumber}
            onChange={handleInputChange}
            error={errors.jobNumber}
            required
          />

          {/* Address */}
          <FormField
            label="Address"
            name="address"
            type="text"
            value={formData.address}
            onChange={handleInputChange}
            error={errors.address}
            required
          />

          {/* WORKS CARRIED OUT */}
          <FormField
            label="WORKS CARRIED OUT"
            name="worksCarriedOut"
            type="textarea"
            value={formData.worksCarriedOut}
            onChange={handleInputChange}
            error={errors.worksCarriedOut}
            required
          />

          {/* HOURS */}
          <FormField
            label="HOURS"
            name="hours"
            type="text"
            value={formData.hours}
            onChange={handleInputChange}
            error={errors.hours}
            required
          />

          {/* WORKED WITH */}
          <FormField
            label="WORKED WITH"
            name="workedWith"
            type="text"
            value={formData.workedWith}
            onChange={handleInputChange}
            error={errors.workedWith}
            required
          />

          {/* Certificate Shared - Multiple Choice */}
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <label className="mb-4 block text-base font-medium text-gray-900 dark:text-white">
              Certificate Shared{" "}
              <span className="text-red-500">*</span>
            </label>
            <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
              Select all that apply
            </p>
            <div className="space-y-3">
              {certificateOptions.map((option) => (
                <label
                  key={option}
                  className="flex cursor-pointer items-center gap-3 rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <input
                    type="checkbox"
                    checked={formData.certificateShared.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                    className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 dark:text-gray-300">{option}</span>
                </label>
              ))}
            </div>
            {errors.certificateShared && (
              <p className="mt-2 text-sm text-red-500">{errors.certificateShared}</p>
            )}
          </div>

          {/* MATERIALS */}
          <FormField
            label="MATERIALS"
            name="materials"
            type="textarea"
            value={formData.materials}
            onChange={handleInputChange}
            error={errors.materials}
            required
          />

          {/* SUPPLIER */}
          <FormField
            label="SUPPLIER"
            name="supplier"
            type="text"
            value={formData.supplier}
            onChange={handleInputChange}
            error={errors.supplier}
            required
          />

          {/* VARIATIONS - Extras */}
          <FormField
            label="VARIATIONS - Extras (works outside scope of works / specification of job)"
            name="variationsExtras"
            type="textarea"
            value={formData.variationsExtras}
            onChange={handleInputChange}
            error={errors.variationsExtras}
            required
          />

          {/* HOURS EXTRA */}
          <FormField
            label="HOURS EXTRA"
            name="hoursExtra"
            type="text"
            value={formData.hoursExtra}
            onChange={handleInputChange}
            error={errors.hoursExtra}
            required
          />

          {/* EXTRA MATERIALS */}
          <FormField
            label="EXTRA MATERIALS"
            name="extraMaterials"
            type="textarea"
            value={formData.extraMaterials}
            onChange={handleInputChange}
            error={errors.extraMaterials}
            required
          />

          {/* SUPPLIER EXTRAS */}
          <FormField
            label="SUPPLIER EXTRAS"
            name="supplierExtras"
            type="text"
            value={formData.supplierExtras}
            onChange={handleInputChange}
            error={errors.supplierExtras}
            required
          />

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="rounded-lg border border-gray-300 px-8 py-3 font-semibold text-gray-700 transition hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Clear form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

interface FormFieldProps {
  label: string;
  name: string;
  type: "text" | "date" | "textarea";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
}

function FormField({
  label,
  name,
  type,
  value,
  onChange,
  error,
  required,
  placeholder,
}: FormFieldProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
      <label
        htmlFor={name}
        className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={3}
          className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
        />
      )}
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
}
