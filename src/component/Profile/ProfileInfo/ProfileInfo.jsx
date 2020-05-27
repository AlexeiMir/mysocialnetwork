import React, {useState} from "react";
import s from "./ProfileInfo.module.css"
import Grid from "@material-ui/core/Grid";
import userPhoto from '../../../assets/images/user.png'
import BackupOutlinedIcon from '@material-ui/icons/BackupOutlined';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import ProfileData from "./ProfileData";
import Preloader from "../../common/Preloader";
import ProfileStatus from "./ProfileStatus";
import IconButton from "@material-ui/core/IconButton";
import EditePopupProfileInfoRedux from "./EditePopupProfileInfo";


const ProfileInfo = ({profile,handleUpdateStatus,status,isOwner,handleUploadPhoto,handleUpdateProfile}) => {
    const [confirmOpen, setConfirmOpen] = useState(false);
   

    const onMainPhotoSelect = (e) => {
        if (e.target.files.length){
            handleUploadPhoto(e.target.files[0])
        }
    }

    const submit = (profileData) => {
        debugger
        handleUpdateProfile(profileData)
    }

    return <>
        <div className={s.descriptionBlock}>
            <Grid container className={s.coverPhoto}>
                <Grid item xs={12}>
                    <img
                        src="https://22qnf42qu4jl3jax7jw7r5in-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/Survival-Thrival-Update-from-Front-Lines.jpg"/>
                </Grid>
            </Grid>


            <div className={s.descriptionPerson}>
                <Grid container justify="center">
                    <Grid item xs={8}>
                        <Grid container justify="center" alignItems="flex-start" spacing={3}>

                            <Grid item xs={6}>
                                <Grid container justify="center" direction="column">
                                    <Grid item xs className={s.mainPhoto}>
                                        <img src={profile.photos.large || userPhoto}/>
                                    </Grid>
                                    <Grid item xs>
                                        <ProfileStatus handleUpdateStatus={handleUpdateStatus} status={status}/>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={6}>
                                <Grid container justify="center">
                                    <Grid item xs>
                                        <Grid container justify="flex-end" spacing={3}>
                                            {isOwner&&
                                            <label htmlFor="file">
                                                <IconButton aria-label="settings" >
                                                    <input id="file" type={"file"} className={s.fileBtn} onChange={onMainPhotoSelect}
                                                    />
                                                <BackupOutlinedIcon fontSize={"large"}
                                                className={s.uploadOutlined} />
                                                </IconButton>
                                            </label>}
                                        </Grid>
                                    </Grid>
                                    <Grid item xs>
                                        <Grid container justify="center" spacing={3}>
                                            {isOwner&&
                                                <AccountBoxOutlinedIcon fontSize={"large"} className={s.uploadOutlined}
                                                onClick={() => setConfirmOpen(true) }/>
                                            }
                                            <EditePopupProfileInfoRedux onSubmit={submit} open={confirmOpen}
                                                                   setOpen={setConfirmOpen} profile={profile}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>

                <Grid container className={s.profileData}>
                    <Grid item xs={12}>
                             <ProfileData profile={profile} />
                    </Grid>
                </Grid>

            </div>
        </div>
    </>
}


export default ProfileInfo;
