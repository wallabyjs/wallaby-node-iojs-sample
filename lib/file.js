router.delete('/:id', function (req, res) {

  if (routeHelper.isInt(req.params.id)) {
    AuditLog.destroy(
      {
        where: {id: parseInt(req.params.id, 10)}
      }
    ).then(function (result) {
      res.status(http_status.OK_200).send({affectedcount: result});
    }).catch(function (error) {
      /* ignore coverage */
      logger.error('Error clearing audit log', util.inspect(error), function (log) {
        res.status(http_status.INTERNAL_SERVER_ERROR_500).send({
          id: log? log.id : 'audit logging error',
          err: error
        });
      });
    });

  } else {
    routeHelper.handleErrorResponse(res, {error: 'Integer value expected.'});
  }
});