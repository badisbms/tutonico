import React, { Component } from "react";
import MaterialTable from "@material-table/core";
import { userService } from "../service/DataService";
import { CircularProgress, Grid } from "@material-ui/core";
import "../styles/Table.css";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { title: "Prénom", field: "first_name" },
        { title: "Nom", field: "last_name" },
      ],

      usersData: [],
      dataFetched: false,
      lang_fr: {
        body: {
          emptyDataSourceMessage: "Pas d'enregistrement à afficher",
          addTooltip: "Ajouter",
          deleteTooltip: "Supprimer",
          editTooltip: "Editer",
          filterRow: {
            filterTooltip: "Filtrer",
          },
          editRow: {
            deleteText: "Voulez-vous supprimer cette ligne?",
            cancelTooltip: "Annuler",
            saveTooltip: "Enregistrer",
          },
        },
        grouping: {
          placeholder: "Tirer l'entête ...",
          groupedBy: "Grouper par:",
        },
        header: {
          actions: "Actions",
        },
        pagination: {
          labelDisplayedRows: "{from}-{to} de {count}",
          labelRowsSelect: "lignes",
          labelRowsPerPage: "lignes par page:",
          firstAriaLabel: "Première page",
          firstTooltip: "Première page",
          previousAriaLabel: "Page précédente",
          previousTooltip: "Page précédente",
          nextAriaLabel: "Page suivante",
          nextTooltip: "Page suivante",
          lastAriaLabel: "Dernière page",
          lastTooltip: "Dernière page",
        },
        toolbar: {
          addRemoveColumns: "Ajouter ou supprimer des colonnes",
          nRowsSelected: "{0} ligne(s) sélectionée(s)",
          showColumnsTitle: "Voir les colonnes",
          showColumnsAriaLabel: "Voir les colonnes",
          exportTitle: "Exporter",
          exportAriaLabel: "Exporter",
          exportName: "Exporter en CSV",
          searchTooltip: "Chercher",
          searchPlaceholder: "Chercher",
        },
      },
    };
  }

  userService = new userService();

  componentDidMount() {
    setTimeout(this.getUsersData, 1500);
  }

  getUsersData = () => {
    this.userService
      .getUsers()
      .then((params) => {
        this.setState({
          usersData: params,
        });
      })
      .then(() => {
        this.setState({ dataFetched: !this.state.dataFetched });
      });
  };

  render() {
    return (
      <div className="table_container">
        {!this.state.dataFetched ? (
          <div className="spinner">
            <CircularProgress />
            <p className="data">Chargement des utilisateurs ...</p>
          </div>
        ) : (
          <Grid container justifyContent="center" alignItems="center">
            <MaterialTable
              title="Utilisateurs"
              columns={this.state.columns}
              data={this.state.usersData}
              detailPanel={({ rowData }) => {
                return (
                  <div
                    style={{
                      fontSize: 15,
                      height: 100,
                    }}
                  >
                    <p> Adresse Ip : {rowData.ip_address}</p>
                    <p> Genre : {rowData.gender}</p>
                    <p> Email : {rowData.email}</p>
                  </div>
                );
              }}
              onRowClick={(event, rowData, togglePanel) => togglePanel()}
              localization={this.state.lang_fr}
              options={{
                rowStyle: {
                  fontSize : "13px",
                  fontFamily: "Poppins",
                },
                searchFieldStyle: {
                  width : "10vw"
                },
              }}
            />
          </Grid>
        )}
      </div>
    );
  }
}

export default Table;
