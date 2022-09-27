import { ReviewFormProps } from "./ReviewForm.props";
import classes from "./ReviewForm.module.css";
import cn from "classnames";
import Input from "../Input";
import Rating from "../Rating";
import Textarea from "../Texarea";
import Button from "../Button";
import CloseIcon from "./close.svg";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm, IReviewSendResponse } from "./ReviewForm.interface";
import axios from "axios";
import { API } from "../../helpers/api";
import { useState } from "react";

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IReviewForm>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const onSubmit = async (formData: IReviewForm) => {
    try {
      const { data } = await axios.post<IReviewSendResponse>(API.review.createDemo, { ...formData, productId });
      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setError("Something goes wrong");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        // ✅ TypeScript knows err is Error
        setError(error.message);
      } else {
        console.log("Unexpected error", error);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(classes.ReviewForm, className)} {...props}>
        <Input {...register("name", { required: { value: true, message: "Fill name" } })} placeholder='Name' error={errors.name} />
        <Input {...register("title", { required: { value: true, message: "Fill title of review" } })} className={classes.Title} placeholder='Review Title' error={errors.title} />

        <div className={classes.Rating}>
          <span>Point</span>
          <Controller control={control} rules={{ required: { value: true, message: "Fill rating" } }} name='rating' render={({ field }) => <Rating isEditable ref={field.ref} rating={field.value} setRating={field.onChange} error={errors.rating} />} />
        </div>
        <Textarea {...register("description", { required: { value: true, message: "Fill description of review" } })} error={errors.description} className={classes.Description} placeholder='Review Text' />

        <div className={classes.Submit}>
          <Button appearance='primary'>Send</Button>
          <span className={classes.Info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>

      {isSuccess && (
        <div className={cn(classes.Panel, classes.Success)}>
          <div className={classes.SuccessTitle}>Your Review is sent</div>
          <div className={classes.SuccessTitle}>Thanks your review will showd after review</div>
          <CloseIcon className={classes.Close} onClick={() => setIsSuccess(false)} />
        </div>
      )}
      {error && (
        <div className={cn(classes.Error, classes.Panel)}>
          {error}
          <CloseIcon className={classes.Close} onClick={() => setError(undefined)} />
        </div>
      )}
    </form>
  );
};
